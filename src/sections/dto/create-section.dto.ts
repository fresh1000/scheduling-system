import { ArrayMaxSize, ArrayMinSize, IsArray, IsIn, IsString } from "class-validator";

export class CreateSectionDto {
  
  name: string;
  subjectId: number;
  teacherId: number;
  classroomId: number;
  // @IsArray()
  // @IsString({ each: true})
  // @ArrayMinSize(1)
  // @ArrayMaxSize(5)
  @IsIn(['M', 'T', 'W', 'TH', 'F'], { each: true })
  days: string[];  // Days in array format, e.g., ["M", "W", "F"]
  
  startTime: string;  // e.g., "08:00"
  endTime: string;    // e.g., "08:50"
}
