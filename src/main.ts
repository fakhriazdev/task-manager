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
    allowedHeaders: ['Content-Type', 'Authorization'],
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

  const port: string | number = process.env.PORT || 5000;
  await app.listen(port, '0.0.0.0');
}

bootstrap();
