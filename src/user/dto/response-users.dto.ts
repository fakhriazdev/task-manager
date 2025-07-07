import { DT_ACCESS_STORE, DT_ACCESS_REGION } from '@prisma/client';

export class RequestCreateUsersDto {
  nik: string;
  nama: string;
  password: string;
  noTelp: string;
  email: string;
  roleId: string;
  accessStore: Partial<DT_ACCESS_STORE>[] | null;
  accessRegions: Partial<DT_ACCESS_REGION>[] | null;
  statusActive: boolean;
}
