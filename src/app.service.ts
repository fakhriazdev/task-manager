import { ConflictException, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { encodePassword } from './utils/bcrypt';
import { RoleService } from './role/role.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly roleService: RoleService,
    private readonly config: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit(): Promise<void> {
    const userCount = await this.prismaService.dT_USER.count();

    if (userCount > 0) {
      console.log('🟡 Admin is already registered!');
      return;
    }

    const adminNik = this.mustGetEnv('ADMIN_NIK');
    const adminNama = this.mustGetEnv('ADMIN_NAMA');
    const adminPassword = this.mustGetEnv('ADMIN_PASSWORD');
    const adminNoTelp = this.mustGetEnv('ADMIN_NO_TELP');
    const adminEmail = this.mustGetEnv('ADMIN_EMAIL');
    const adminRoleId = this.mustGetEnv('ADMIN_ROLE_ID');
    const adminRoleName = this.mustGetEnv('ADMIN_ROLE_NAME');

    try {
      await this.roleService.create({
        id: adminRoleId,
        nama: adminRoleName,
      });

      await this.prismaService.dT_USER.create({
        data: {
          nik: adminNik,
          nama: adminNama,
          password: encodePassword(adminPassword),
          noTelp: adminNoTelp,
          email: adminEmail,
          roleId: adminRoleId,
          statusActive: true,
        },
      });

      console.log('✅ Admin Registered!');
    } catch (e) {
      throw new ConflictException(e instanceof Error ? e.message : e);
    }
  }

  private mustGetEnv(key: string): string {
    const value = this.config.get<string>(key);
    if (!value) throw new Error(`Missing ENV variable: ${key}`);
    return value;
  }
}
