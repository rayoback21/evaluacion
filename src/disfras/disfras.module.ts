import { Module } from '@nestjs/common';
import { DisfrasService } from './disfras.service';
import { DisfrasController } from './disfras.controller';

@Module({
  controllers: [DisfrasController],
  providers: [DisfrasService],
})
export class DisfrasModule {}
