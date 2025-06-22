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
export interface ImplAuthService {
  create(data: RegisterRequest): Promise<RegisterResponse>;
  validateUser(data: LoginRequest): Promise<LoginResponse>;
  sendForgotPw(data: ForgotPwRequest): Promise<string>;
  resetPw(data: ResetPwRequest): Promise<string>;
  // changePassword(data: ChangePasswordRequest): Promise<string>;
}

@Injectable()
export class AuthService implements ImplAuthService {
  constructor(
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

      const hashedPassword = encodePassword(data.password);

      const newUser = await this.prismaService.dT_USER.create({
        data: {
          nik: data.nik,
          nama: data.nama,
          password: hashedPassword,
          no_telp: data.notelp,
          email: data.email,
        },
      });

      return {
        nik: newUser.nik,
        nama: newUser.nama,
      };
    } catch (error) {
      throw new ConflictException(error instanceof Error ? error.message : 'Failed to register');
    }
  }

  async validateUser(data: LoginRequest): Promise<LoginResponse> {
    const user = await this.prismaService.dT_USER.findUnique({
      where: { nik: data.nik },
    });

    if (!user) {
      throw new UnauthorizedException('Bad credentials');
    }

    const isPasswordValid = await comparePassword(data.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Bad credentials');
    }

    const payload = {
      nik: user.nik,
      nama: user.nama,
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
