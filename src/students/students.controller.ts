import { Controller, Get, Param } from '@nestjs/common';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get(':id/schedule')
  async schedule(@Param('id') id: number) {
    return this.studentsService.getSchedule(id);
  }
}
