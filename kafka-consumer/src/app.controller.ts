import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('test-topic')
  handleKafkaMessage(@Payload() payload: { value: Buffer }) {
    try {
      console.log('Extracted value:', payload);
    } catch (err) {
      console.error('Failed to parse Kafka message:', err);
    }
  }
}
