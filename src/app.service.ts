import { ConflictException, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { encodePassword } from './utils/bcrypt';
import { RoleService } from './role/role.service';
import { ERole } from './constant/ERole';

@Injectable()
export class AppService implements OnModuleInit {
  private readonly logger = new Logger(AppService.name);

  constructor(
    private readonly prismaService: PrismaService,
    private readonly roleService: RoleService,
    private readonly config: ConfigService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit(): Promise<void> {
    await this.createRolesIfNotExist();
    const userCount = await this.prismaService.dT_USER.count();

    if (userCount > 0) {
      this.logger.log('🟡 Admin is already registered!');
      return;
    }

    const adminNik = this.mustGetEnv('ADMIN_NIK');
    const adminNama = this.mustGetEnv('ADMIN_NAMA');
    const adminPassword = this.mustGetEnv('ADMIN_PASSWORD');
    const adminNoTelp = this.mustGetEnv('ADMIN_NO_TELP');
    const adminEmail = this.mustGetEnv('ADMIN_EMAIL');

    try {
      const superRole = await this.roleService.getOrSave(ERole.SUPER);

      await this.prismaService.dT_USER.create({
        data: {
          nik: adminNik,
          nama: adminNama,
          password: encodePassword(adminPassword),
          noTelp: adminNoTelp,
          email: adminEmail,
          roleId: superRole.id,
          statusActive: true,
        },
      });

      this.logger.log('✅ Admin Registered!');
    } catch (e) {
      throw new ConflictException(e instanceof Error ? e.message : e);
    }
  }

  private mustGetEnv(key: string): string {
    const value = this.config.get<string>(key);
    if (!value) throw new Error(`Missing ENV variable: ${key}`);
    return value;
  }

  private async createRolesIfNotExist(): Promise<void> {
    const allRoles = Object.values(ERole).map((role) => ({
      id: role,
      nama: role,
    }));

    await this.prismaService.dT_ROLE.createMany({
      data: allRoles,
      skipDuplicates: true,
    });

    this.logger.log('✅ Roles already Registered!');
  }
}
