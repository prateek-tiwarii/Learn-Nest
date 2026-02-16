import { IsEmail, IsNotEmpty, IsOptional, IsString, IsInt, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsInt()
  @Min(18)
  @Max(100)
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  gender?: string;

  @IsString()
  @IsOptional()
  location?: string;

  @IsString()
  @IsOptional()
  interests?: string;

  @IsString()
  @IsOptional()
  photoUrl?: string;
}
