import { Controller, Post, Body } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';

@Controller('sections')
export class SectionsController {
  constructor(private readonly sectionService: SectionsService) {}

  @Post()
  async createSection(@Body() createSectionDto: CreateSectionDto) {
    return this.sectionService.createSection(createSectionDto);
  }
}
