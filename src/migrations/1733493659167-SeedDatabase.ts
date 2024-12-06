import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedDatabase1733493659167 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Insert Subjects
        await queryRunner.query(`
          INSERT INTO subjects (id, name) VALUES
          (1, 'Mathematics'),
          (2, 'Physics'),
          (3, 'Chemistry'),
          (4, 'Biology'),
          (5, 'History');
        `);

        // Insert Teachers
        await queryRunner.query(`
          INSERT INTO teachers (id, name) VALUES
          (1, 'John Doe'),
          (2, 'Jane Smith'),
          (3, 'Albert Einstein'),
          (4, 'Marie Curie'),
          (5, 'Isaac Newton');
        `);

        // Insert Classrooms
        await queryRunner.query(`
          INSERT INTO classrooms (id, name, location) VALUES
          (1, 'Room 101', 'Building A'),
          (2, 'Room 102', 'Building A'),
          (3, 'Lab 201', 'Building B'),
          (4, 'Lab 202', 'Building B'),
          (5, 'Auditorium', 'Building C');
        `);

        // Insert Students
        await queryRunner.query(`
          INSERT INTO students (id, name, email) VALUES
          (1, 'Alice Johnson', 'alice.johnson@example.com'),
          (2, 'Bob Brown', 'bob.brown@example.com'),
          (3, 'Charlie Davis', 'charlie.davis@example.com'),
          (4, 'Diana Evans', 'diana.evans@example.com'),
          (5, 'Evan Ford', 'evan.ford@example.com');
        `);

        // Insert Sections
        await queryRunner.query(`
          INSERT INTO sections (id, name, subject_id, teacher_id, classroom_id, days, start_time, end_time) VALUES
          (1, 'Math 101', 1, 1, 1, ARRAY['M', 'W', 'F'], '08:00', '08:50'),
          (2, 'Physics 101', 2, 2, 2, ARRAY['T', 'TH'], '09:00', '10:20'),
          (3, 'Chemistry 101', 3, 3, 3, ARRAY['M', 'W', 'F'], '10:00', '10:50'),
          (4, 'Biology 101', 4, 4, 4, ARRAY['T', 'TH'], '11:00', '12:20'),
          (5, 'History 101', 5, 5, 5, ARRAY['M', 'W', 'F'], '13:00', '13:50');
        `);

        // Insert StudentSections
        await queryRunner.query(`
          INSERT INTO sections_students_students ("studentsId", "sectionsId") VALUES
          (1, 1),
          (1, 2),
          (2, 1),
          (2, 3),
          (3, 2),
          (3, 4),
          (4, 3),
          (4, 5),
          (5, 1),
          (5, 5);
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      // Remove StudentSections
      await queryRunner.query(`DELETE FROM students_sections_sections;`);

      // Remove Sections
      await queryRunner.query(`DELETE FROM sections;`);

      // Remove Students
      await queryRunner.query(`DELETE FROM students;`);

      // Remove Teachers
      await queryRunner.query(`DELETE FROM teachers;`);

      // Remove Classrooms
      await queryRunner.query(`DELETE FROM classrooms;`);

      // Remove Subjects
      await queryRunner.query(`DELETE FROM subjects;`);
    }

}
