import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Match } from '../matches/entities/match.entity';
import { Message } from '../messages/entities/message.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dating.db',
      entities: [User, Match, Message],
      synchronize: true, // Auto-create database schema (disable in production)
      logging: false,
    }),
  ],
})
export class DatabaseModule {}
