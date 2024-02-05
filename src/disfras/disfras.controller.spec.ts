import { Test, TestingModule } from '@nestjs/testing';
import { DisfrasController } from './disfras.controller';
import { DisfrasService } from './disfras.service';

describe('DisfrasController', () => {
  let controller: DisfrasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DisfrasController],
      providers: [DisfrasService],
    }).compile();

    controller = module.get<DisfrasController>(DisfrasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
