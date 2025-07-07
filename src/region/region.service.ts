import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { RequestCreateRegionDto } from './dto/requestCreateRegion.dto';
import { PrismaService } from '../prisma/prisma.service';
import { DT_REGION } from '@prisma/client';

@Injectable()
export class RegionService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: RequestCreateRegionDto): Promise<DT_REGION | undefined> {
    try {
      return await this.prismaService.dT_REGION.create({
        data,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new ConflictException(error.message || 'Unable to create region');
      }
    }
  }

  async findAll(): Promise<DT_REGION[] | undefined> {
    try {
      return await this.prismaService.dT_REGION.findMany();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new ConflictException(error.message || 'Unable to get regions');
      }
    }
  }

  async findOne(id: string) {
    try {
      return await this.prismaService.dT_REGION.findUnique({
        where: {
          id,
        },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new NotFoundException(error.message || 'Region not found');
      }
    }
    return `This action returns a #${id} region`;
  }

  async update(id: string, data: RequestCreateRegionDto) {
    const existingRegion = await this.findOne(id);
    if (!existingRegion) {
      throw new NotFoundException('Region not found');
    }
    if (data.id !== id) {
      const isIdExist = await this.prismaService.dT_REGION.findUnique({
        where: { id: data.id },
      });
      if (isIdExist) {
        throw new ConflictException(`Region ID '${data.id}' already exists`);
      }
    }

    return await this.prismaService.$transaction(async (tx) => {
      const updatedRegion = await tx.dT_REGION.update({
        where: { id },
        data,
      });

      if (data.id !== id) {
        await tx.dT_STORE.updateMany({
          where: { regionId: id },
          data: { regionId: data.id },
        });

        await tx.dT_ACCESS_REGION.updateMany({
          where: { regionId: id },
          data: { regionId: data.id },
        });
      }

      return updatedRegion;
    });
  }


  remove(id: number) {
    return `This action removes a #${id} region`;
  }
}
