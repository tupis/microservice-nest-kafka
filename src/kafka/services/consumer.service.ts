import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { ConsumerSubscribeTopics } from 'kafkajs';
import { IConsumer } from '../interfaces/consumer.interface';
import { ConfigService } from '@nestjs/config';

interface IKafkaConsumerOptions {
  topic: ConsumerSubscribeTopics;
  config: string;
  onMessage: (message: any) => Promise<void>;
}

@Injectable()
export class ConsumerSerivce implements OnApplicationShutdown {
  private readonly consumers: IConsumer[] = [];

  constructor(private readonly configService: ConfigService) {}

  async consumer({
    config,
    onMessage,
    topic,
  }: IKafkaConsumerOptions): Promise<void> {
    // TODO: implementets consumer logic ant put into consumers array
    console.log(config);
    console.log(onMessage);
    console.log(topic);
  }

  async onApplicationShutdown(): Promise<void> {
    await Promise.all(this.consumers.map((consumer) => consumer.disconnect()));
  }
}
