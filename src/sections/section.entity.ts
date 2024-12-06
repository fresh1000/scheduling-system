import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, JoinColumn } from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { Subject } from '../subjects/subject.entity';
import { Student } from '../students/student.entity';
import { Classroom } from 'src/classrooms/classroom.entity';

@Entity('sections')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // 'Math101-A'

  @Column('text', { array: true })
  days: string[]; // ['M', 'W', 'F']

  @Column({ name: 'start_time' })
  startTime: string; // 08:00

  @Column({ name: 'end_time' })
  endTime: string;

  @ManyToOne(() => Teacher, teacher => teacher.sections)
  @JoinColumn({ name: 'teacher_id' })
  teacher: Teacher;

  @ManyToOne(() => Subject, subject => subject.sections)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @ManyToOne(() => Classroom, classroom => classroom.sections)
  @JoinColumn({ name: 'classroom_id' })
  classroom: Classroom;

  @ManyToMany(() => Student, student => student.sections)
  @JoinTable()
  students: Student[];
}
