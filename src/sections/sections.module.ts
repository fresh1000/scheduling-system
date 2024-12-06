import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './section.entity';
import { Student } from 'src/students/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Section, Student]),
  ],
  providers: [SectionsService],
  controllers: [SectionsController]
})
export class SectionsModule {}
