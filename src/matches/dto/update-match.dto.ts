import { IsString, IsIn } from 'class-validator';

export class UpdateMatchDto {
  @IsString()
  @IsIn(['pending', 'accepted', 'rejected'])
  status: string;
}
