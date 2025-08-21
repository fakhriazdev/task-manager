import { BadRequestException, Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { put, del } from '@vercel/blob';
import { CreateTicketDto } from './dto/request/requestCreateTicket.dto';
import { UpdateTicketDto } from './dto/request/requestUpdateTicket.dto';
import { CreateTicketResponseDto } from './dto/response/responseTIcket.dto';

import { assertImageFile, safePathname, getOriginalName } from '../utils/file';
import { takeStr, normalizeErrMsg } from '../utils/string';
import { DT_TICKET } from '@prisma/client';

@Injectable()
export class TicketService {
  private readonly logger = new Logger(TicketService.name);

  constructor(private readonly prismaService: PrismaService) {}

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
        const data = new Blob([file.buffer], {
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

  async createTicket(
    data: CreateTicketDto,
    files?: Express.Multer.File[],
  ): Promise<CreateTicketResponseDto> {
    const errors: string[] = [];

    const handlerNik = await this.pickNextSuperAdminNik();
    const id = await this.generateTicketId();
    try {
      await this.prismaService.dT_TICKET.create({
        data: {
          id,
          handlerNik,
          idStore: takeStr(data.idStore, 20)!,
          categories: takeStr(data.categories, 20)!,
          status: false,
          keterangan: takeStr(data.keterangan, 20)!,
          fromPayment: takeStr(data.fromPayment ?? null, 20),
          toPayment: takeStr(data.toPayment ?? null, 20),
          isDirectSelling: data.isDirectSelling ?? null,
          billcode: takeStr(data.billcode ?? null, 12),
          grandTotal: takeStr(data.grandTotal ?? null, 12),
        },
      });
    } catch (e) {
      throw new BadRequestException(`Gagal membuat ticket: ${normalizeErrMsg(e)}`);
    }

    // Process files if any
    let added = 0;
    if (files?.length) {
      const result = await this.processImageFiles(files, id);
      added = result.added;
      errors.push(...result.errors);
    }

    return { id, added, errors };
  }

  async updateTicket(
    ticketId: string,
    updateTicketDto: UpdateTicketDto,
    addFiles?: Express.Multer.File[],
    replaceFiles?: { imageId: string; file: Express.Multer.File }[],
  ): Promise<string> {
    await this.ensureTicket(ticketId);
    const errors: string[] = [];
    // Update ticket fields if provided
    if (updateTicketDto.patch && Object.keys(updateTicketDto.patch).length > 0) {
      try {
        const patchData = { ...updateTicketDto.patch };

        // Trim string fields
        if (typeof patchData.idStore === 'string')
          patchData.idStore = takeStr(patchData.idStore, 20) as string;
        if (typeof patchData.categories === 'string')
          patchData.categories = takeStr(patchData.categories, 20) as string;
        if (typeof patchData.keterangan === 'string')
          patchData.keterangan = takeStr(patchData.keterangan, 20) as string;
        if (typeof patchData.fromPayment === 'string')
          patchData.fromPayment = takeStr(patchData.fromPayment, 20);
        if (typeof patchData.toPayment === 'string')
          patchData.toPayment = takeStr(patchData.toPayment, 20);
        if (typeof patchData.billcode === 'string')
          patchData.billcode = takeStr(patchData.billcode, 12);
        if (typeof patchData.grandTotal === 'string')
          patchData.grandTotal = takeStr(patchData.grandTotal, 12);

        await this.prismaService.dT_TICKET.update({
          where: { id: ticketId },
          data: patchData,
        });
      } catch (e) {
        errors.push(`Patch ticket gagal: ${normalizeErrMsg(e)}`);
      }
    }

    // Add new files
    if (addFiles?.length) {
      const result = await this.processImageFiles(addFiles, ticketId);
      errors.push(...result.errors);
    }

    // Replace existing images
    if (replaceFiles?.length) {
      for (const { imageId, file } of replaceFiles) {
        try {
          if (!imageId) throw new BadRequestException('imageId wajib diisi untuk replace');
          assertImageFile(file);

          const existing = await this.prismaService.dT_IMAGES.findUnique({
            where: { id: imageId },
            select: { id: true, url: true, ticketId: true },
          });
          if (!existing) throw new NotFoundException(`Gambar ${imageId} tidak ditemukan`);
          if (existing.ticketId !== ticketId) {
            throw new BadRequestException(`Gambar ${imageId} bukan milik ticket ${ticketId}`);
          }

          const pathname = safePathname(getOriginalName(file) ?? 'upload.bin', ticketId);
          const blobData = new Blob([file.buffer], {
            type: file.mimetype || 'application/octet-stream',
          });

          // Upload new blob
          const newBlob = await put(pathname, blobData, {
            access: 'public',
            addRandomSuffix: true,
            contentType: file.mimetype,
          });

          // Update database
          try {
            await this.prismaService.dT_IMAGES.update({
              where: { id: existing.id },
              data: {
                url: newBlob.url,
                filename: getOriginalName(file).slice(0, 200),
                mimeType: (file.mimetype || 'application/octet-stream').slice(0, 100),
                bytes: file.size,
              },
            });
          } catch (err) {
            const rolled = await this.tryDeleteBlob(newBlob.url, `rollback replace ${imageId}`);
            if (!rolled) this.logger.error(`Rollback gagal hapus blob baru: ${newBlob.url}`);
            throw err;
          }

          // Delete old blob
          await this.tryDeleteBlob(existing.url, `hapus blob lama replace ${imageId}`);
        } catch (e) {
          errors.push(`Replace ${imageId} gagal: ${normalizeErrMsg(e)}`);
        }
      }
    }

    // Delete images
    if (updateTicketDto.deleteImageIds?.length) {
      const imgs = await this.prismaService.dT_IMAGES.findMany({
        where: { id: { in: updateTicketDto.deleteImageIds } },
        select: { id: true, url: true, ticketId: true },
      });
      const map = new Map(imgs.map((i) => [i.id, i]));

      for (const id of updateTicketDto.deleteImageIds) {
        try {
          const row = map.get(id);
          if (!row) throw new NotFoundException(`Gambar ${id} tidak ditemukan`);
          if (row.ticketId !== ticketId) {
            throw new BadRequestException(`Gambar ${id} bukan milik ticket ${ticketId}`);
          }

          await this.prismaService.dT_IMAGES.delete({ where: { id } });

          const ok = await this.tryDeleteBlob(row.url, `delete ${id}`);
          if (!ok) {
            errors.push(`Blob ${id} gagal dihapus (non-fatal)`);
          }
        } catch (e) {
          errors.push(`Hapus ${id} gagal: ${normalizeErrMsg(e)}`);
        }
      }
    }
    return 'update Ticket Successfuly';
  }

  async getTickets(): Promise<DT_TICKET[]> {
    return this.prismaService.dT_TICKET.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        handlerNik: true,
        idStore: true,
        categories: true,
        status: true,
        keterangan: true,
        fromPayment: true,
        toPayment: true,
        isDirectSelling: true,
        billcode: true,
        grandTotal: true,
        createdAt: true,
        updatedAt: true,
        images: {
          select: {
            id: true,
            url: true,
            filename: true,
            mimeType: true,
            bytes: true,
          },
        },
      },
    });
  }
  async getTicketByStoreId(idStore: string): Promise<DT_TICKET[] | null> {
    await this.ensureTicket(idStore);
    return this.prismaService.dT_TICKET.findMany({
      where: { idStore: idStore },
      select: {
        id: true,
        handlerNik: true,
        idStore: true,
        categories: true,
        status: true,
        keterangan: true,
        fromPayment: true,
        toPayment: true,
        isDirectSelling: true,
        billcode: true,
        grandTotal: true,
        createdAt: true,
        updatedAt: true,
        images: { select: { id: true, url: true, filename: true, mimeType: true, bytes: true } },
      },
    });
  }
  async getTicketByHandlerId(userId: string): Promise<DT_TICKET[] | null> {
    await this.ensureTicket(userId);
    return this.prismaService.dT_TICKET.findMany({
      where: { handlerNik: userId },
      select: {
        id: true,
        handlerNik: true,
        idStore: true,
        categories: true,
        status: true,
        keterangan: true,
        fromPayment: true,
        toPayment: true,
        isDirectSelling: true,
        billcode: true,
        grandTotal: true,
        createdAt: true,
        updatedAt: true,
        images: { select: { id: true, url: true, filename: true, mimeType: true, bytes: true } },
      },
    });
  }
  async completeTicket(ticketId: string): Promise<string> {
    // 1) Pastikan tiket ada & ambil status awal
    const ticket = await this.prismaService.dT_TICKET.findUnique({
      where: { id: ticketId },
    });
    if (!ticket) throw new NotFoundException('Ticket tidak ditemukan');

    // 2) Ambil images dulu (perlu URL untuk hapus blob)
    const images = await this.prismaService.dT_IMAGES.findMany({
      where: { ticketId },
      select: { id: true, url: true },
    });
    const imageIds = images.map((i) => i.id);

    // 3) Transaksi DB: hapus images (record) + mark ticket selesai
    await this.prismaService.$transaction([
      this.prismaService.dT_IMAGES.deleteMany({ where: { id: { in: imageIds } } }),
      this.prismaService.dT_TICKET.update({
        where: { id: ticketId },
        data: { status: true },
      }),
    ]);

    // 4) Hapus blob di Vercel (best-effort, non-fatal)
    let blobFailed = 0;
    for (const img of images) {
      try {
        await del(img.url);
      } catch (e) {
        blobFailed++;
        this.logger.warn(
          `Gagal hapus blob saat completeTicket(${ticketId}) id=${img.id} :: ${e instanceof Error ? e.message : String(e)}`,
        );
      }
    }

    if (blobFailed > 0) {
      return `Ticket ${ticketId} completed. Catatan: ${blobFailed} blob gagal dihapus (non-fatal).`;
    }
    return `Ticket ${ticketId} completed.`;
  }
}
