export class CreateSectionDto {
  name: string;
  subjectId: number;
  teacherId: number;
  classroomId: number;
  days: string[];  // Days in array format, e.g., ["M", "W", "F"]
  startTime: string;  // e.g., "08:00"
  endTime: string;    // e.g., "08:50"
}
