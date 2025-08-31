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
  Request,
  Req,
  Logger,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { TicketService } from './ticket.service';
import { CreateTicketDto } from './dto/request/requestCreateTicket.dto';

import { CommonResponse } from '../common/commonResponse';
import { handleException } from '../utils/handleException';
import { AuthGuard } from '../security/authGuard';
import { Roles } from '../security/roles.decorator';
import { DT_USER } from '@prisma/client';
import { RequestRepairTransactionDto } from './dto/request/requestTicketCommand';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ResponseTicketCommand } from './dto/response/responseTicketCommand';
import * as http from 'node:http';

@Controller('api/tickets')
export class TicketController {
  private readonly logger = new Logger(TicketService.name);
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

  @Get('stores/:idStore')
  async getByStores(@Param('idStore') idStore: string) {
    try {
      const data = await this.ticketService.getTicketByStoreId(idStore);
      return new CommonResponse('Ticket by Store', HttpStatus.OK, data);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }

  @EventPattern('TICKET.STATUS.UPDATED')
  async handleTicketStatusUpdated(@Payload() payload: ResponseTicketCommand) {
    try {
      const result = await this.ticketService.TicketStatusUpdated(payload);
      return new CommonResponse('ticket status updated', HttpStatus.OK, result);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }

  @UseGuards(AuthGuard)
  @Post('complite')
  async compliteTicket(@Body() body: { idStore: string }, @Req() request: Request) {
    const user = request['user'] as DT_USER;
    const { nik } = user;
    try {
      const res: string = await this.ticketService.completeTicket(body.idStore, nik);
      return new CommonResponse('Ticket Complited', HttpStatus.OK, res);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }

  @UseGuards(AuthGuard)
  @Post('repair-transaction')
  async repairTransaction(@Body() dto: RequestRepairTransactionDto, @Req() request: Request) {
    const user = request['user'] as DT_USER;
    const { nik } = user;
    try {
      const res: string = await this.ticketService.repairtPayment(nik, dto);
      return new CommonResponse('Transaction has been Repaired', HttpStatus.OK, res);
    } catch (e) {
      return handleException((e as Error).message);
    }
  }
}
