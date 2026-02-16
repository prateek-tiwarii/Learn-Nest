import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class CreateMatchDto {
  @IsString()
  @IsNotEmpty()
  user1Id: string;

  @IsString()
  @IsNotEmpty()
  user2Id: string;

  @IsString()
  @IsIn(['pending', 'accepted', 'rejected'])
  status?: string;
}
