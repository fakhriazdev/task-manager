import { IsString, IsEnum } from 'class-validator';
import { EStatus } from '../../../constant/EStatus';

export class ResponseTicketCommand {
  @IsString()
  ticketId: string;

  @IsEnum(EStatus)
  status: EStatus;
}
