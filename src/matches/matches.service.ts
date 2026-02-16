import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Match } from './entities/match.entity';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { UsersService } from '../users/users.service';
import { MatchStatus } from './enums/match-status.enum';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Match)
    private matchesRepository: Repository<Match>,
    private usersService: UsersService,
  ) {}

  async create(createMatchDto: CreateMatchDto): Promise<Match> {
    // Validate both users exist
    await this.usersService.findOne(createMatchDto.user1Id);
    await this.usersService.findOne(createMatchDto.user2Id);

    // Check if users are the same
    if (createMatchDto.user1Id === createMatchDto.user2Id) {
      throw new BadRequestException('Cannot create match with the same user');
    }

    // Check if match already exists between these users
    const existingMatch = await this.matchesRepository.findOne({
      where: [
        { user1Id: createMatchDto.user1Id, user2Id: createMatchDto.user2Id },
        { user1Id: createMatchDto.user2Id, user2Id: createMatchDto.user1Id },
      ],
    });

    if (existingMatch) {
      throw new BadRequestException('Match already exists between these users');
    }

    const match = this.matchesRepository.create({
      ...createMatchDto,
      status: createMatchDto.status || MatchStatus.PENDING,
    });
    
    return this.matchesRepository.save(match);
  }

  async findAll(): Promise<Match[]> {
    return this.matchesRepository.find({
      relations: ['user1', 'user2'],
    });
  }

  async findOne(id: string): Promise<Match> {
    const match = await this.matchesRepository.findOne({
      where: { id },
      relations: ['user1', 'user2'],
    });
    
    if (!match) {
      throw new NotFoundException(`Match with ID ${id} not found`);
    }
    
    return match;
  }

  async findByUser(userId: string): Promise<Match[]> {
    // Validate user exists
    await this.usersService.findOne(userId);

    return this.matchesRepository.find({
      where: [
        { user1Id: userId },
        { user2Id: userId },
      ],
      relations: ['user1', 'user2'],
    });
  }

  async update(id: string, updateMatchDto: UpdateMatchDto): Promise<Match> {
    const match = await this.findOne(id);
    
    Object.assign(match, updateMatchDto);
    return this.matchesRepository.save(match);
  }

  async remove(id: string): Promise<void> {
    const match = await this.findOne(id);
    await this.matchesRepository.remove(match);
  }
}
