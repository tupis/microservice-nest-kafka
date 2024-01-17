import { Injectable } from '@nestjs/common';
import { IProducer } from '../interfaces/producer.interface';

@Injectable()
export class ProducerService implements IProducer {
  async connect(): Promise<void> {}

  async disconnect(): Promise<void> {}

  async produce(message: any): Promise<void> {}
}
