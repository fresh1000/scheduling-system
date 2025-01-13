import { Section } from 'src/sections/section.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, Index } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @Index({ unique: true })
  email: string;

  @ManyToMany(() => Section, section => section.students)
  sections: Section[];
}
