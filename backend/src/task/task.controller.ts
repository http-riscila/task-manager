import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Put,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PartialUpdateTaskDto } from './dto/partial-update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() data: CreateTaskDto) {
    return this.taskService.create(data);
  }

  @Get()
  getAllTasks() {
    return this.taskService.getAll();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getById(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() data: UpdateTaskDto) {
    return this.taskService.update(id, data);
  }

  @Patch(':id')
  partialUpdateTask(
    @Param('id') id: string,
    @Body() data: PartialUpdateTaskDto,
  ) {
    return this.taskService.partialUpdate(id, data);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
