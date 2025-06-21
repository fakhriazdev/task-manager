import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterRequest } from './dto/request/registerRequest';
import { RegisterResponse } from './dto/response/registerResponse';
import { CommonResponse } from '../common/commonResponse';
import { LoginRequest } from './dto/request/loginRequest';
import { LoginResponse } from './dto/response/loginResponse';
import { AuthGuard } from '../security/authGuard';
import { DT_USER } from '@prisma/client';
import { GetInfoResponse } from './dto/response/getInfoResponse';
import { ForgotPwRequest } from './dto/request/forgotPwRequest';
import { ResetPwRequest } from './dto/request/resetPwRequest';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() request: RegisterRequest,
  ): Promise<CommonResponse<RegisterResponse | string>> {
    try {
      const registerResponse: RegisterResponse = await this.authService.create(request);
      return new CommonResponse('Register Successfully', HttpStatus.CREATED, registerResponse);
    } catch (error) {
      return new CommonResponse(
        'Register Failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() request: LoginRequest,
    @Res({ passthrough: true }) res: Response,
  ): Promise<CommonResponse<string>> {
    try {
      const loginResponse: LoginResponse = await this.authService.validateUser(request);
      res.cookie('access_token', loginResponse.token, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24,
      });
      return new CommonResponse('Login Successfull', HttpStatus.OK, 'Login Successfull');
    } catch (error) {
      return new CommonResponse(
        'Login Failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
        error instanceof Error ? error.message : 'Unknown error',
      );
    }
  }
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response): void {
    try {
      res.clearCookie('access_token', {
        path: '/',
        secure: false,
        httpOnly: false,
        sameSite: 'lax',
      });
      res
        .status(HttpStatus.OK)
        .json(
          new CommonResponse('Logged out successfully', HttpStatus.OK, 'Logged out successfully'),
        );
    } catch (error) {
      console.error('Logout Error:', error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json(
          new CommonResponse(
            'Logout Failed',
            HttpStatus.INTERNAL_SERVER_ERROR,
            error instanceof Error ? error.message : 'Logout Failed',
          ),
        );
    }
  }
  @UseGuards(AuthGuard)
  @Get('/user-info')
  UserInfo(@Req() request: Request): CommonResponse<GetInfoResponse> {
    const user = request['user'] as DT_USER;
    const { nik, nama } = user;
    return new CommonResponse('welcome', HttpStatus.OK, { nik, nama });
  }

  @Get('/forgot-password')
  async sendOtpResetPw(@Body() request: ForgotPwRequest): Promise<CommonResponse<string>> {
    const sendOTPResetPw: string = await this.authService.sendForgotPw(request);
    return new CommonResponse('Check your email', HttpStatus.OK, sendOTPResetPw);
  }
  @Post('/reset-password')
  async resetPw(@Body() request: ResetPwRequest): Promise<CommonResponse<string>> {
    const sendOTPResetPw: string = await this.authService.resetPw(request);
    return new CommonResponse(sendOTPResetPw, HttpStatus.OK, sendOTPResetPw);
  }
}
