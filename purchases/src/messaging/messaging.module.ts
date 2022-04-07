import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KafkaService } from './kafka.service';

@Module({
  imports: [ConfigModule.forRoot()], //? This setup is required to access .env variables
  providers: [KafkaService],
  exports: [KafkaService], //? Put like this to be able to use it in other modules
})
export class MessagingModule {}
