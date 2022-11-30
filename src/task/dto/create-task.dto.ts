import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
