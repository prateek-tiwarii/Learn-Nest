import { IsEnum } from 'class-validator';
import { MatchStatus } from '../enums/match-status.enum';

export class UpdateMatchDto {
  @IsEnum(MatchStatus)
  status: MatchStatus;
}
