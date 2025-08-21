// src/ticket/ticket.controller.ts
import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/request/requestCreateTicket.dto';

import { CommonResponse } from '../common/commonResponse';
import { handleException } from '../utils/handleException';
import { AuthGuard } from '../security/authGuard';
import { Roles } from '../security/roles.decorator';

@Controller('api/tickets')
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @UseGuards(AuthGuard)
  @Roles('SUPER')
  @Get()
  async getTickets() {
    try {
      const data = await this.ticketService.getTickets();
      return new CommonResponse('Ticket List', HttpStatus.OK, data);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }

  @Post()
  @UseInterceptors(FilesInterceptor('files', 20))
  async createTicket(
    @Body() body: CreateTicketDto,
    @UploadedFiles() addFiles?: Express.Multer.File[],
  ) {
    try {
      const res = await this.ticketService.createTicket(body, addFiles);
      return new CommonResponse('Ticket Created', HttpStatus.CREATED, res);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }

  @Post('update/:id')
  @UseInterceptors(FilesInterceptor('files', 20))
  async updateTicket(@Param('id') id: string, @UploadedFiles() files: Express.Multer.File[]) {
    try {
      const res = await this.ticketService.updateTicket(
        id,
        { patch: undefined, deleteImageIds: undefined },
        files,
        [],
      );
      return new CommonResponse('Images Added', HttpStatus.OK, res);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }

  @Get('store/:idStore')
  async getByStore(@Param('idStore') idStore: string) {
    try {
      const data = await this.ticketService.getTicketByStoreId(idStore);
      return new CommonResponse('Ticket by Store', HttpStatus.OK, data);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }

  @Post('complite/:id')
  async compliteTicket(@Param('idStore') idStore: string) {
    try {
      const res: string = await this.ticketService.completeTicket(idStore);
      return new CommonResponse('Ticket Complited', HttpStatus.OK, res);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }
}
