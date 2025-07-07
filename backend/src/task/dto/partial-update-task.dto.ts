import { PartialType } from '@nestjs/mapped-types';
import { UpdateTaskDto } from './update-task.dto';

export class PartialUpdateTaskDto extends PartialType(UpdateTaskDto) {}
