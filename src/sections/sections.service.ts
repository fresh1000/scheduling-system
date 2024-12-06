import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './section.entity';
import { CreateSectionDto } from './dto/create-section.dto';
import { Student } from 'src/students/student.entity';

@Injectable()
export class SectionsService {
  constructor(
    @InjectRepository(Section)
    private sectionRepository: Repository<Section>,
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createSection(newSectionData: CreateSectionDto): Promise<Section> {
    const section = this.sectionRepository.create(newSectionData);
    return this.sectionRepository.save(section);
  }

  async addSectionToStudent(studentId: number, sectionId: number): Promise<void> {
    const student = await this.studentRepository.findOne({ where: { id: studentId }, relations: ['sections'] });
    const section = await this.sectionRepository.findOne({ where: { id: sectionId } });

    if (!student || !section) {
      throw new BadRequestException('Student or Section not found');
    }

    for (const existingSection of student.sections) {
      if (this.isOverlapping(existingSection, section)) {
        throw new BadRequestException('Section times overlap');
      }
    }

    student.sections.push(section);
    await this.studentRepository.save(student);
  }

  private isOverlapping(section1: Section, section2: Section): boolean {
    const daysOverlap = section1.days.some(day => section2.days.includes(day));
    if (!daysOverlap) return false;

    const [start1, end1] = [this.parseTime(section1.startTime), this.parseTime(section1.endTime)];
    const [start2, end2] = [this.parseTime(section2.startTime), this.parseTime(section2.endTime)];

    return (start1 < end2 && start2 < end1);
  }

  private parseTime(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}
