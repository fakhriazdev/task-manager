import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DT_USER } from '@prisma/client';
import { RequestCreateUsersDto } from './dto/response-users.dto';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<DT_USER[]> {
    return await this.prismaService.dT_USER.findMany({
      include: {
        accessStore: {
          select: {
            storeId: true,
          },
        },
        accessRegions: {
          select: {
            regionId: true,
          },
        },
      },
    });
  }

  async create(data: RequestCreateUsersDto): Promise<DT_USER> {
    const { nik, nama, password, noTelp, email, roleId, accessStore, accessRegions } = data;

    let firstAccessStoreId: string | null = null;
    let firstAccessRegionId: string | null = null;

    return await this.prismaService.$transaction(async (tx) => {
      const newUser = await tx.dT_USER.create({
        data: {
          nik,
          nama,
          password,
          noTelp,
          email,
          roleId,
          statusActive: false,
          accessStoreId: null,
          accessRegionId: null,
        },
      });
      if (accessStore && accessStore.length > 0) {
        const first = await tx.dT_ACCESS_STORE.create({
          data: {
            userNik: newUser.nik,
            storeId: accessStore[0].storeId!,
          },
        });
        firstAccessStoreId = first.id;

        const remainingStores = accessStore
          .slice(1)
          .filter((item) => typeof item.storeId === 'string');
        if (remainingStores.length > 0) {
          await tx.dT_ACCESS_STORE.createMany({
            data: remainingStores.map((item) => ({
              userNik: newUser.nik,
              storeId: item.storeId!,
            })),
          });
        }
      }

      if (accessRegions && accessRegions.length > 0) {
        const first = await tx.dT_ACCESS_REGION.create({
          data: {
            userNik: newUser.nik,
            regionId: accessRegions[0].regionId!,
          },
        });
        firstAccessRegionId = first.id;

        const remainingRegions = accessRegions
          .slice(1)
          .filter((item) => typeof item.regionId === 'string');
        if (remainingRegions.length > 0) {
          await tx.dT_ACCESS_REGION.createMany({
            data: remainingRegions.map((item) => ({
              userNik: newUser.nik,
              regionId: item.regionId!,
            })),
          });
        }
      }

      return await tx.dT_USER.update({
        where: { nik: newUser.nik },
        data: {
          accessStoreId: firstAccessStoreId,
          accessRegionId: firstAccessRegionId,
        },
      });
    });
  }
}
