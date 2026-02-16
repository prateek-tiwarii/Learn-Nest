import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { MatchStatus } from '../enums/match-status.enum';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user1Id: string;

  @Column()
  user2Id: string;

  @Column({ type: 'text', default: MatchStatus.PENDING })
  status: MatchStatus;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.matchesAsUser1)
  @JoinColumn({ name: 'user1Id' })
  user1: User;

  @ManyToOne(() => User, user => user.matchesAsUser2)
  @JoinColumn({ name: 'user2Id' })
  user2: User;
}
