import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DisfrasService } from './disfras.service';
import { CreateDisfraDto } from './dto/create-disfra.dto';
import { UpdateDisfraDto } from './dto/update-disfra.dto';

@Controller('disfras')
export class DisfrasController {
  constructor(private readonly disfrasService: DisfrasService) {}

  @Post()
  create(@Body() createDisfraDto: CreateDisfraDto) {
    return this.disfrasService.create(createDisfraDto);
  }

  @Get()
  findAll() {
    return this.disfrasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disfrasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDisfraDto: UpdateDisfraDto) {
    return this.disfrasService.update(+id, updateDisfraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disfrasService.remove(+id);
  }
}
