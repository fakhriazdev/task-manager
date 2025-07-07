import { IsString } from 'class-validator';

export class RequestRoleDto {
  @IsString()
  id: string;

  @IsString()
  nama: string;
}
