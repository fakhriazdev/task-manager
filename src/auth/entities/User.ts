import { Role } from './Role';

export class User {
  nik: string;
  nama: string;
  password: string;
  noTelp: string;
  email: string;
  roleId: string;
  roles: Role[];
  statusActive: boolean;
  accessRegion: string | null;
  accessStore: string | null;
}
