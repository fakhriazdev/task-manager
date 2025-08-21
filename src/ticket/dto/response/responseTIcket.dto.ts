export class CreateTicketResponseDto {
  id: string;

  added: number;

  errors: string[];
}

export class UpdateTicketResponseDto {
  ticketId: string;

  added: number;

  replaced: number;

  deleted: number;

  errors: string[];
}

export class ImageDto {
  id: string;

  url: string;

  filename: string;

  mimeType: string;

  bytes: number;
}

export class TicketWithImagesDto {
  id: string;

  handlerNik: string | null;

  idStore: string;

  categories: string;

  status: boolean;

  keterangan: string;

  fromPayment: string | null;

  toPayment: string | null;

  isDirectSelling: boolean | null;

  billcode: string | null;

  grandTotal: string | null;

  createdAt: Date;

  updatedAt: Date;

  images: ImageDto[];
}
