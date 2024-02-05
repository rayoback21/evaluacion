import { Injectable } from '@nestjs/common';
import { CreateDisfraDto } from './dto/create-disfra.dto';
import { UpdateDisfraDto } from './dto/update-disfra.dto';

@Injectable()
export class DisfrasService {
  create(createDisfraDto: CreateDisfraDto) {
    return 'This action adds a new disfra';
  }

  findAll() {
    return `This action returns all disfras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} disfra`;
  }

  update(id: number, updateDisfraDto: UpdateDisfraDto) {
    return `This action updates a #${id} disfra`;
  }

  remove(id: number) {
    return `This action removes a #${id} disfra`;
  }
}
