import { IsString, IsNotEmpty, IsEnum, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(['TO_DO', 'IN_PROGRESS', 'DONE'])
  status: 'TO_DO' | 'IN_PROGRESS' | 'DONE';

  @IsString()
  @IsNotEmpty()
  userId: string;
}
