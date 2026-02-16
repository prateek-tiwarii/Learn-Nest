import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('matches')
export class Match {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user1Id: string;

  @Column()
  user2Id: string;

  @Column({ default: 'pending' })
  status: string; // pending, accepted, rejected

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, user => user.matchesAsUser1)
  @JoinColumn({ name: 'user1Id' })
  user1: User;

  @ManyToOne(() => User, user => user.matchesAsUser2)
  @JoinColumn({ name: 'user2Id' })
  user2: User;
}
