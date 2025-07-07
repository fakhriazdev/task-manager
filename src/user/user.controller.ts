import { Body, Controller, Get, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CommonResponse } from '../common/commonResponse';
import { handleException } from '../utils/handleException';
import { DT_USER } from '@prisma/client';
import { AuthGuard } from '../security/authGuard';
import { Roles } from '../security/roles.decorator';
import { RequestCreateUsersDto } from './dto/response-users.dto';

@UseGuards(AuthGuard)
@Roles('SUPER')
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll() {
    try {
      const userResponse: DT_USER[] = await this.userService.findAll();
      return new CommonResponse('Users List', HttpStatus.OK, userResponse);
    } catch ({ message }) {
      return handleException(message as string);
    }
  }

  @Post('/add')
  async create(@Body() data: RequestCreateUsersDto) {
    try {
      const createResponse: DT_USER = await this.userService.create(data);
      return new CommonResponse('Create User Successfully', HttpStatus.CREATED, createResponse);
    } catch ({ message }) {
      return handleException(message as string);
    }
  }
}
