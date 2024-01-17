import { Module } from '@nestjs/common';
import { ConsumerSerivce } from './services/consumer.service';
import { ProducerService } from './services/producer.service';

@Module({
  providers: [ConsumerSerivce, ProducerService],
  exports: [ConsumerSerivce, ProducerService],
})
export class KafkaModule {}
