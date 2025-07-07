import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RequestRoleDto } from './dto/request-role.dto';
import { CommonResponse } from '../common/commonResponse';
import { AuthGuard } from '../security/authGuard';
import { RolesGuard } from '../security/roles.guard';
import { Roles } from '../security/roles.decorator';
import { handleException } from '../utils/handleException';
import { DT_ROLE } from '@prisma/client';

@Controller('api/roles')
@UseGuards(AuthGuard, RolesGuard)
@Roles('SUPER')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post('/add')
  async addRole(@Body() createRoleDto: RequestRoleDto) {
    try {
      const role: DT_ROLE | string = await this.roleService.create(createRoleDto);
      return new CommonResponse<DT_ROLE | string>('Role created', HttpStatus.CREATED, role);
    } catch ({ message }) {
      return handleException(message as string);
    }
  }

  @Get()
  async findAll() {
    try {
      const roles = await this.roleService.findAll();
      return new CommonResponse('List of roles', HttpStatus.OK, roles);
    } catch ({ message }) {
      return handleException(message as string);
    }
  }

  @Get(':id')
  async role(@Param('id') id: string) {
    try {
      const role = await this.roleService.findOne(id);
      return new CommonResponse('Role detail', HttpStatus.OK, role);
    } catch ({ message }) {
      return handleException(message as string);
    }
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    try {
      await this.roleService.remove(id);
      return new CommonResponse('Role removed', HttpStatus.OK, null);
    } catch ({ message }) {
      return handleException(message as string);
    }
  }

  @Patch('/update/:id')
  async update(@Param('id') id: string, @Body() requestRoleDto: RequestRoleDto) {
    try {
      await this.roleService.update(id, requestRoleDto);
      return new CommonResponse('Role Updated', HttpStatus.OK, null);
    } catch ({ message }) {
      return handleException(message as string);
    }
  }
}
