import { Section } from 'src/sections/section.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('classrooms')
export class Classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @OneToMany(() => Section, section => section.classroom)
  sections: Section[];
}
