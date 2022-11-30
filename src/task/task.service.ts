import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { EditTaskDto } from './dto/edit-task.dto';
import { Task } from './entities/task.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>
  ) {}

  async findAll(skip = 0, limit = 10): Promise<Task[]>  {
    return await this.taskRepository.find({
      skip,
      take: limit
    });
  }

  async findOne(id: number): Promise<Task> {
    return await this.taskRepository.findOne({
      where: { id }
    });
  }

  async create(createTask: CreateTaskDto): Promise<Task> {
    const task: Task = this.taskRepository.create({
      ...createTask
    });

    await this.taskRepository.save(task);
    return task;
  }

  async edit(id: number, editTask: EditTaskDto): Promise<UpdateResult> {
    return await this.taskRepository.update(id, {
      ...editTask,
      isDone: editTask.isDone && true,
      isEdited: editTask.description && true
    });
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.taskRepository.delete(id);
  }
}
