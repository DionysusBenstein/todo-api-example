import { IsString, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class EditTaskDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  @IsOptional()
  isDone?: boolean;
}
