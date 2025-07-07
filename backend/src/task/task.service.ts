import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PartialUpdateTaskDto } from './dto/partial-update-task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTaskDto) {
    return this.prisma.task.create({
      data,
    });
  }

  async getAll() {
    return this.prisma.task.findMany();
  }

  async getById(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async partialUpdate(id: string, data: PartialUpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
