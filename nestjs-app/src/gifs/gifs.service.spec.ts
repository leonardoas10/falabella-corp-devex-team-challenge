import { Test, TestingModule } from '@nestjs/testing';
import { GifsService } from './gifs.service';

// TODO create Test
describe('GifsService', () => {
  let service: GifsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GifsService],
    }).compile();

    service = module.get<GifsService>(GifsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
