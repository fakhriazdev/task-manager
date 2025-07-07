import { Injectable, NotFoundException } from '@nestjs/common';
import { RequestRoleDto } from './dto/request-role.dto';
import { PrismaService } from '../prisma/prisma.service';
import { DT_ROLE } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createRoleDto: RequestRoleDto): Promise<DT_ROLE | string> {
    const { id, nama } = createRoleDto;
    try {
      return await this.prismaService.$transaction(async (tx) => {
        const existingRole = await tx.dT_ROLE.findUnique({
          where: { id },
        });
        if (existingRole) {
          throw new Error('Role already exists');
        }

        const role: DT_ROLE = await tx.dT_ROLE.create({
          data: { id, nama },
        });

        return role;
      });
    } catch ({ message }) {
      throw new Error(message);
    }
  }
  async findOne(id: string): Promise<DT_ROLE | null> {
    return await this.prismaService.dT_ROLE.findUnique({
      where: { id },
    });
  }
  async remove(id: string): Promise<void> {
    try {
      const existing = await this.prismaService.dT_ROLE.findUnique({ where: { id } });
      if (!existing) {
        throw new NotFoundException(`Role with id ${id} not found`);
      }

      await this.prismaService.dT_ROLE.delete({ where: { id } });
    } catch (error) {
      console.error('Remove Role Error:', error);
      throw error;
    }
  }
  async findAll(): Promise<DT_ROLE[]> {
    return await this.prismaService.dT_ROLE.findMany({
      orderBy: { id: 'asc' },
      include: {},
    });
  }
  async update(id: string, requestRoleDto: RequestRoleDto): Promise<DT_ROLE> {
    const existing: DT_ROLE | null = await this.findOne(id);
    if (!existing) {
      throw new NotFoundException(`Role with id ${id} not found`);
    }
    return this.prismaService.dT_ROLE.update({
      where: { id },
      data: requestRoleDto,
    });
  }
}
