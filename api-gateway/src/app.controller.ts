import { Controller, Post, Body } from '@nestjs/common';
import { KafkaProducerService } from './KafkaProducerService';

@Controller()
export class AppController {
  constructor(private readonly kafkaProducer: KafkaProducerService) {}

  @Post('send')
  async sendMessage(@Body() body: { message: string }) {
    await this.kafkaProducer.sendMessage('test-topic', JSON.stringify(body));
    return { status: 'Message sent to Kafka' };
  }
}
