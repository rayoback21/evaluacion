import { Test, TestingModule } from '@nestjs/testing';
import { DisfrasService } from './disfras.service';

describe('DisfrasService', () => {
  let service: DisfrasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DisfrasService],
    }).compile();

    service = module.get<DisfrasService>(DisfrasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
