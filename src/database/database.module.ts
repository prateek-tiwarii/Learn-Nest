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
      synchronize: process.env.NODE_ENV !== 'production', // Only auto-sync in development
      logging: false,
    }),
  ],
})
export class DatabaseModule {}
