import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionsModule } from './sections/sections.module';
import { StudentsModule } from './students/students.module';
import { Student } from './students/student.entity';
import { Teacher } from './teachers/teacher.entity';
import { Classroom } from './classrooms/classroom.entity';
import { Section } from './sections/section.entity';
import { Subject } from './subjects/subject.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'scheduling_system',
      entities: [Student, Teacher, Subject, Classroom, Section],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student, Teacher, Subject, Classroom, Section]),
    SectionsModule,
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
