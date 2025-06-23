// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:19092'],
        },
        consumer: {
          groupId: 'consumer-service-group',
        },
      },
    },
  );

  await app.listen();
  console.log(`Kafka Consumer is listening..`);
}
bootstrap();
