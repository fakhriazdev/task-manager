import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { SuspendedUserFilter } from './utils/suspendExecption';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Global filters
  app.useGlobalFilters(new SuspendedUserFilter());

  // Cookie parser
  app.use(cookieParser());
  // Built-in CORS handler (NestJS-level)
  app.enableCors({
    origin: 'https://task-manager-fe-lyart.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Authentication',
      'Access-Control-Allow-Credentials',
      'Access-Control-Allow-Origin',
      'Access-Control-Allow-Methods',
      'Access-Control-Allow-Headers',
      'Access-Control-Request-Headers',
      'Access-Control-Request-Method',
      'X-CSRF-Token',
      'X-Access-Token',
      'X-Auth-Token',
      'X-Client-Id',
      'X-Frame-Options',
      'X-Forwarded-For',
      'X-Real-IP',
      'X-Requested-With',
    ],

    credentials: true,
  });

  // ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 5000);
}

bootstrap();
