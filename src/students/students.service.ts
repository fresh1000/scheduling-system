import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async create(student: Student): Promise<Student> {
    return await this.studentRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  // Fetch student schedule by student ID
  async getSchedule(studentId: number): Promise<any> {
    const student = await this.studentRepository.findOne({ where: { id: studentId }, relations: ['sections', 'sections.subject', 'sections.teacher', 'sections.classroom']});

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    // Return a formatted schedule for the student
    const schedule = student.sections.map(section => {
      return {
        sectionId: section.id,
        name: section.name,
        subject: section.subject.name,
        teacher: section.teacher.name,
        classroom: section.classroom.name,
        days: section.days,
        startTime: section.startTime,
        endTime: section.endTime,
      };
    });

    return schedule;
  }
}
