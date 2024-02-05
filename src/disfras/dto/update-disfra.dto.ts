import { PartialType } from '@nestjs/swagger';
import { CreateDisfraDto } from './create-disfra.dto';

export class UpdateDisfraDto extends PartialType(CreateDisfraDto) {}
