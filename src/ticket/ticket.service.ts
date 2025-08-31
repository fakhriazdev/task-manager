import { BadRequestException, Injectable, NotFoundException, Logger, Inject } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { put, del } from '@vercel/blob';
import { CreateTicketDto } from './dto/request/requestCreateTicket.dto';

import { assertImageFile, safePathname, getOriginalName } from '../utils/file';
import { normalizeErrMsg } from '../utils/string';
import { DT_TICKET } from '@prisma/client';
import { RequestRepairTransactionDto } from './dto/request/requestTicketCommand';
import { ClientProxy } from '@nestjs/microservices';
import { EStatus } from '../constant/EStatus';
import { ResponseTicketCommand } from './dto/response/responseTicketCommand';

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);
  constructor(
    private readonly prismaService: PrismaService,
    @Inject('STORE_CLIENT') private readonly client: ClientProxy,
  ) {}

  private async pickNextSuperAdminNik(): Promise<string> {
    const superAdmins = await this.prismaService.dT_USER.findMany({
      where: { roleId: 'SUPER' }, // pastikan kolom "role" ada di DT_USER
      select: { nik: true },
    });
    if (!superAdmins.length) {
      throw new BadRequestException(
        'Tidak ada user dengan role SUPER_ADMIN untuk assign handlerNik.',
      );
    }

    // Urutkan agar deterministik
    const handlerNiks = superAdmins.map((u) => u.nik).sort();

    // Cari tiket terakhir yang diassign ke salah satu SUPER_ADMIN → ambil "next"
    const last = await this.prismaService.dT_TICKET.findFirst({
      where: { handlerNik: { in: handlerNiks } },
      orderBy: [{ createdAt: 'desc' }, { id: 'desc' }],
      select: { handlerNik: true },
    });

    if (!last?.handlerNik) return handlerNiks[0];
    const idx = handlerNiks.indexOf(last.handlerNik);
    const nextIdx = idx >= 0 ? (idx + 1) % handlerNiks.length : 0;
    return handlerNiks[nextIdx];
  }

  private async ensureTicket(ticketId: string): Promise<{ id: string }> {
    if (!ticketId) throw new BadRequestException('ticketId wajib diisi');
    const ticket = await this.prismaService.dT_TICKET.findUnique({
      where: { id: ticketId },
      select: { id: true },
    });
    if (!ticket) throw new NotFoundException('Ticket tidak ditemukan');
    return ticket;
  }

  private async tryDeleteBlob(url: string, context: string): Promise<boolean> {
    try {
      await del(url);
      return true;
    } catch (e) {
      this.logger.warn(`Non-fatal: gagal hapus blob (${context}): ${url} :: ${normalizeErrMsg(e)}`);
      return false;
    }
  }

  private async generateTicketId(): Promise<string> {
    const prefix = 'TC-';

    const last = await this.prismaService.dT_TICKET.findFirst({
      where: { id: { startsWith: prefix } },
      orderBy: { id: 'desc' },
      select: { id: true },
    });

    let next = 1;
    if (last?.id) {
      const m = /^TC-(\d+)$/.exec(last.id);
      if (m) {
        const n = parseInt(m[1], 10);
        if (!Number.isNaN(n)) next = n + 1;
      }
    }

    const number = String(next).padStart(6, '0');
    return `${prefix}${number}`;
  }

  private async processImageFiles(
    files: Express.Multer.File[],
    ticketId: string,
  ): Promise<{ added: number; errors: string[] }> {
    let added = 0;
    const errors: string[] = [];

    for (const file of files) {
      try {
        assertImageFile(file);

        const pathname = safePathname(getOriginalName(file) ?? 'upload.bin', ticketId);
        const data = new Blob([new Uint8Array(file.buffer)], {
          type: file.mimetype || 'application/octet-stream',
        });

        const blob = await put(pathname, data, {
          access: 'public',
          addRandomSuffix: true,
          contentType: file.mimetype,
        });

        await this.prismaService.dT_IMAGES.create({
          data: {
            url: blob.url,
            filename: getOriginalName(file).slice(0, 200),
            mimeType: (file.mimetype || 'application/octet-stream').slice(0, 100),
            bytes: file.size,
            ticketId,
          },
        });

        added++;
      } catch (e) {
        const name = getOriginalName(file);
        errors.push(`Tambah gambar "${name}" gagal: ${normalizeErrMsg(e)}`);
      }
    }

    return { added, errors };
  }

  //core
  async createTicket(data: CreateTicketDto, files?: Express.Multer.File[]): Promise<string> {
    const handlerNik = await this.pickNextSuperAdminNik();
    const id = await this.generateTicketId();
    const {
      idStore,
      category,
      noTelp,
      description,
      fromPayment,
      toPayment,
      isDirectSelling,
      billCode,
      grandTotal,
    } = data;
    try {
      await this.prismaService.dT_TICKET.create({
        data: {
          id,
          handlerNik,
          idStore,
          noTelp,
          category,
          status: EStatus.QUEUED,
          description,
          fromPayment,
          toPayment,
          isDirectSelling,
          billCode,
          grandTotal,
        },
      });
    } catch (e) {
      throw new BadRequestException(`Gagal membuat ticket: ${normalizeErrMsg(e)}`);
    }

    if (files?.length) {
      await this.processImageFiles(files, id);
    }

    return id;
  }

  async getTickets(): Promise<DT_TICKET[]> {
    return this.prismaService.dT_TICKET.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        images: true,
      },
    });
  }

  async repairtPayment(nik: string, data: RequestRepairTransactionDto): Promise<string> {
    const routingKey = `store.${data.idStore}.commands`;
    this.client.emit<RequestRepairTransactionDto>(routingKey, data);

    await this.prismaService.dT_TICKET.update({
      where: { id: data.ticketId },
      data: {
        status: EStatus.ONPROCESS,
        handlerNik: nik,
      },
    });
    return 'repair payment request sent';
  }
  //by listener
  async TicketStatusUpdated(data: ResponseTicketCommand) {
    await this.prismaService.dT_TICKET.update({
      where: { id: data.ticketId },
      data: {
        status: data.status,
        completedAt: data.status === EStatus.COMPLETED ? new Date() : null,
        updatedAt: new Date(),
      },
    });
    this.logger.log(`✅ Ticket ${data.ticketId} updated to ${data.status}`);
  }

  async getTicketByStoreId(idStore: string): Promise<DT_TICKET[] | null> {
    await this.ensureTicket(idStore);
    return this.prismaService.dT_TICKET.findMany({
      where: { idStore },
    });
  }

  async completeTicket(ticketId: string, nik: string): Promise<string> {
    // 1) Cek tiket ada atau tidak
    const ticket = await this.prismaService.dT_TICKET.findUnique({
      where: { id: ticketId },
    });
    if (!ticket) throw new NotFoundException('Ticket tidak ditemukan');

    // 2) Ambil semua images terkait
    const images = await this.prismaService.dT_IMAGES.findMany({
      where: { ticketId },
      select: { id: true, url: true },
    });
    const imageIds = images.map((i) => i.id);

    // 3) Transaction untuk update tiket + hapus images (sekali saja)
    await this.prismaService.$transaction([
      this.prismaService.dT_TICKET.update({
        where: { id: ticketId },
        data: {
          status: EStatus.COMPLETED,
          completedBy: nik,
          completedAt: new Date(),
        },
      }),
      ...(imageIds.length > 0
        ? [this.prismaService.dT_IMAGES.deleteMany({ where: { id: { in: imageIds } } })]
        : []),
    ]);

    // 4) Hapus blob di Vercel pakai helper
    let blobFailed = 0;
    for (const img of images) {
      const ok = await this.tryDeleteBlob(img.url, `completeTicket(${ticketId}) id=${img.id}`);
      if (!ok) blobFailed++;
    }

    // 5) Return hasil
    return blobFailed > 0
      ? `Ticket ${ticketId} completed, ${blobFailed} blob gagal dihapus (non-fatal).`
      : `Ticket ${ticketId} completed.`;
  }
}
