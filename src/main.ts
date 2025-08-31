import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { SuspendedUserFilter } from './utils/suspendExecption';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap(): Promise<void> {
  // 1. HTTP App
  const app = await NestFactory.create(AppModule);

  // Middleware & global setup
  app.useGlobalFilters(new SuspendedUserFilter());
  app.use(cookieParser());
  app.enableCors({
    origin: 'https://task-manager-fe-lyart.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Microservice RMQ listener
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'TICKET_STATUS_UPDATE',
      queueOptions: { durable: true, arguments: { 'x-queue-type': 'quorum' } },
      exchange: 'EVENT_TICKET_STATUS',
      exchangeType: 'topic',
      routingKey: 'TICKET.STATUS.UPDATED',
    },
  });
  // 3. Jalanin bareng
  await app.startAllMicroservices();
  const port = process.env.PORT || 5000;
  await app.listen(port, '0.0.0.0');

  console.log(`✅ HTTP server running on port ${port}`);
  console.log(`🎧 RMQ microservice listening...`);
}

bootstrap();
