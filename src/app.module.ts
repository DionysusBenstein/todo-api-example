import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todoDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
