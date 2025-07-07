import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterRequest } from './dto/request/registerRequest';
import { RegisterResponse } from './dto/response/registerResponse';
import { comparePassword, encodePassword } from '../utils/bcrypt';
import { LoginRequest } from './dto/request/loginRequest';
import { LoginResponse } from './dto/response/loginResponse';
import { JwtService } from '@nestjs/jwt';
import { ForgotPwRequest } from './dto/request/forgotPwRequest';
import { ResetPwRequest } from './dto/request/resetPwRequest';
import { MailService } from '../utils/mail/mail.service';
import { RoleService } from '../role/role.service';
import { DT_ROLE } from '@prisma/client';

interface JwtPayload {
  nik: string;
  nama: string;
  roleId: string;
  accessStores: string[];
  accessRegions: string[];
}

export interface ImplAuthService {
  create(data: RegisterRequest): Promise<RegisterResponse>;
  validateUser(data: LoginRequest): Promise<LoginResponse>;
  sendForgotPw(data: ForgotPwRequest): Promise<string>;
  resetPw(data: ResetPwRequest): Promise<string>;
}

@Injectable()
export class AuthService implements ImplAuthService {
  constructor(
    private roleService: RoleService,
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async create(data: RegisterRequest): Promise<RegisterResponse> {
    try {
      const existingUser = await this.prismaService.dT_USER.findUnique({
        where: { nik: data.nik },
      });

      if (existingUser) {
        throw new ConflictException('User already exists');
      }

      const getRole: DT_ROLE | null = await this.roleService.findOne(data.roleId);
      if (!getRole) {
        throw new ConflictException('Role does not exist');
      }

      const hashedPassword = encodePassword(data.password);
      const storeAccessRoles = ['SC', 'SPVJ', 'SPV', 'CASHIER'];
      const regionAccessRoles = ['AC'];

      const result = await this.prismaService.$transaction(async (tx) => {
        const newUser = await tx.dT_USER.create({
          data: {
            nik: data.nik,
            nama: data.nama,
            password: hashedPassword,
            noTelp: data.notelp,
            email: data.email,
            roleId: getRole.id,
            statusActive: true,
          },
        });

        // === Handle akses store (SC, SPVJ, SPV, CASHIER)
        if (storeAccessRoles.includes(data.roleId)) {
          if (!data.accessStoreIds || data.accessStoreIds.length === 0) {
            throw new ConflictException('Access stores are required for this role');
          }

          const storesData = data.accessStoreIds.map((store) => ({
            userNik: newUser.nik,
            storeId: store.storeId,
          }));

          await tx.dT_ACCESS_STORE.createMany({
            data: storesData,
          });

          const firstStore = await tx.dT_ACCESS_STORE.findFirst({
            where: {
              userNik: newUser.nik,
              storeId: data.accessStoreIds[0].storeId,
            },
          });

          if (firstStore) {
            await tx.dT_USER.update({
              where: { nik: newUser.nik },
              data: {
                accessStoreId: firstStore.id,
              },
            });
          }
        }

        // === Handle akses region (AC)
        if (regionAccessRoles.includes(data.roleId)) {
          if (!data.accessRegionIds || data.accessRegionIds.length === 0) {
            throw new ConflictException('Access regions are required for this role');
          }

          const regionsData = data.accessRegionIds.map((data) => ({
            userNik: newUser.nik,
            regionId: data.regionId,
          }));

          await tx.dT_ACCESS_REGION.createMany({
            data: regionsData,
          });

          const firstRegion = await tx.dT_ACCESS_REGION.findFirst({
            where: {
              userNik: newUser.nik,
              regionId: data.accessRegionIds[0].regionId,
            },
          });

          if (firstRegion) {
            await tx.dT_USER.update({
              where: { nik: newUser.nik },
              data: {
                accessRegionId: firstRegion.id,
              },
            });
          }
        }

        return newUser;
      });

      return {
        nik: result.nik,
        nama: result.nama,
        role: result.roleId,
      };
    } catch (error) {
      throw new ConflictException(error instanceof Error ? error.message : 'Failed to register');
    }
  }

  async validateUser(data: LoginRequest): Promise<LoginResponse> {
    const user = await this.prismaService.dT_USER.findUnique({
      where: { nik: data.nik },
      include: {
        accessRegions: {
          select: {
            regionId: true,
          },
        },
        accessStores: {
          select: {
            storeId: true,
          },
        },
      },
    });

    if (!user || !user.statusActive) {
      throw new UnauthorizedException('Bad credentials');
    }

    const isPasswordValid = await comparePassword(data.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Bad credentials');
    }

    // Ekstrak dan pastikan array-nya aman untuk ESLint
    const accessStores: string[] = Array.isArray(user.accessStores)
      ? user.accessStores.map((s) => s.storeId)
      : [];

    const accessRegions: string[] = Array.isArray(user.accessRegions)
      ? user.accessRegions.map((r) => r.regionId)
      : [];

    const payload: JwtPayload = {
      nik: user.nik,
      nama: user.nama,
      roleId: user.roleId,
      accessStores: accessStores,
      accessRegions: accessRegions,
    };

    const token = await this.jwtService.signAsync(payload);
    return { token };
  }
  async sendForgotPw({ email }: ForgotPwRequest): Promise<string> {
    const user = await this.prismaService.dT_USER.findFirstOrThrow({
      where: { email },
    });

    if (!user.email) {
      throw new BadRequestException('Email tidak tersedia');
    }

    try {
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

      const token = this.jwtService.sign(
        { otp },
        {
          expiresIn: '15m',
          secret: process.env.SECRET_KEY,
          issuer: process.env.ISSUER_STAMP,
        },
      );

      await this.prismaService.lOG_FORGOT_PASSWORD.create({
        data: {
          otp,
          nik: user.nik,
          expiresAt,
        },
      });

      await this.mailService.sendResetPasswordEmail(user.email, token, otp);

      return 'Reset code sent via email';
    } catch (e) {
      throw new ConflictException(e instanceof Error ? e.message : 'Unexpected error');
    }
  }

  async resetPw({ otp, newPassword }: ResetPwRequest): Promise<string> {
    const whorequest = await this.prismaService.lOG_FORGOT_PASSWORD.findUnique({
      where: { otp },
    });

    if (!whorequest) {
      throw new BadRequestException('OTP is invalid');
    }

    if (whorequest.used || new Date() > new Date(whorequest.expiresAt)) {
      throw new BadRequestException('OTP already used, or expired');
    }

    const password: string = encodePassword(newPassword);

    await this.prismaService.$transaction([
      this.prismaService.dT_USER.update({
        where: { nik: whorequest.nik },
        data: { password },
      }),
      this.prismaService.lOG_FORGOT_PASSWORD.update({
        where: { otp },
        data: { used: true },
      }),
    ]);

    return 'Change Password Successfully';
  }
}
