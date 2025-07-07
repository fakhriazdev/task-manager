import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestStoreDto } from './dto/request-store.dto';
import { DT_STORE } from '@prisma/client';
import { RegionService } from '../region/region.service';

@Injectable()
export class StoreService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly regionService: RegionService,
  ) {}

  async create(data: RequestStoreDto): Promise<string> {
    try {
      const existing = await this.prismaService.dT_STORE.findUnique({
        where: { id: data.id },
      });

      if (existing) {
        throw new ConflictException(`Store with ID ${data.id} already exists`);
      }

      const region = await this.regionService.findOne(data.regionId);
      if (!region) {
        throw new NotFoundException(`Region with ID ${data.regionId} not found`);
      }

      await this.prismaService.dT_STORE.create({
        data,
      });

      return 'Store created successfully';
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new ConflictException(error.message || 'Unable to create store');
      }
      throw new ConflictException('Unknown error while creating store');
    }
  }
  async findAll(): Promise<DT_STORE[]> {
    return await this.prismaService.dT_STORE.findMany({
      include: {
        region: {
          select: {
            region: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<DT_STORE | null> {
    return await this.prismaService.dT_STORE.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: RequestStoreDto) {
    const store: DT_STORE | null = await this.prismaService.dT_STORE.findUnique({ where: { id } });

    if (!store) {
      throw new NotFoundException(`Store with ID ${id} not found`);
    }

    return await this.prismaService.$transaction(async (tx) => {
      const updatedStore = await tx.dT_STORE.update({
        where: { id },
        data,
      });
      await tx.dT_ACCESS_STORE.updateMany({
        where: { storeId: id },
        data: {
          storeId: data.id,
        },
      });

      return updatedStore;
    });
  }

  async remove(id: string): Promise<DT_STORE> {
    const store = await this.prismaService.dT_STORE.findUnique({ where: { id } });
    const accessStore = await this.prismaService.dT_ACCESS_STORE.findMany({ where: { id } });
    if (accessStore && accessStore.length > 0) {
      throw new NotFoundException(`cannot be delete because it is still assigned to active users`);
    }
    if (!store) {
      throw new NotFoundException(`Store with ID ${id} not found`);
    }

    return await this.prismaService.dT_STORE.delete({
      where: { id },
    });
  }
}
