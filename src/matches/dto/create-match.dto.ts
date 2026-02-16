import { IsNotEmpty, IsString, IsEnum, IsOptional } from 'class-validator';
import { MatchStatus } from '../enums/match-status.enum';

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  user1Id: string;

  @IsString()
  @IsNotEmpty()
  user2Id: string;

  @IsEnum(MatchStatus)
  @IsOptional()
  status?: MatchStatus;
}
