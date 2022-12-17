import { TransformInterceptor } from './interceptors/transform.interceptor';
import { CreateTaskDto } from './dto/create-task.dto';
import { EditTaskDto } from './dto/edit-task.dto';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import {
  Controller,
  UseInterceptors,
  Get,
  Post,
  Body,
  Put,
  Query,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  DefaultValuePipe
} from '@nestjs/common';
import { ValidatePayloadExistsPipe } from './pipes/validation.pipe';

@UseInterceptors(TransformInterceptor)
@Controller('tasks')
export class TaskController {
  constructor(
    private taskService: TaskService
  ) { }

  @Get()
  async findAll(
    @Query('skip', new DefaultValuePipe(0)) skip: number,
    @Query('limit', new DefaultValuePipe(10)) limit: number
  ): Promise<{ totalTaskCount: number, taskList: Task[] }> {
    return await this.taskService.findAll(skip, limit);
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<Task> {
    const foundTask: Task = await this.taskService.findOne(id);

    if (!foundTask) {
      throw new NotFoundException(`Task with id '${id}' not found`);
    }

    return foundTask;
  }

  @Post()
  async create(
    @Body(ValidatePayloadExistsPipe)
    createTask: CreateTaskDto
  ): Promise<Task> {
    return await this.taskService.create(createTask);
  }

  @Put(':id')
  async edit(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidatePayloadExistsPipe)
    editTask: EditTaskDto
  ): Promise<void> {
    const { affected } = await this.taskService.edit(id, editTask);

    if (affected <= 0) {
      throw new NotFoundException(`Task with id '${id}' not found`);
    }
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number
  ): Promise<void> {
    const { affected } = await this.taskService.remove(id);

    if (affected <= 0) {
      throw new NotFoundException(`Task with id '${id}' not found`);
    }
  }

  @Delete()
  async removeAll(): Promise<void> {
    return await this.taskService.removeAll();
  }
}
