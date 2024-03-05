import { Test, TestingModule } from '@nestjs/testing';
import { Readable } from 'stream';
import { Express } from 'express';

import { GifsService } from './gifs.service';
import { MongoGifsRepository } from './repositories/mongo-gifs.repository';
import { GifDocument } from './gif.schema';

describe('GifsService', () => {
  let service: GifsService;
  let mockMongoGifsRepository: Partial<MongoGifsRepository>;

  beforeEach(async () => {
    mockMongoGifsRepository = {
      getGifs: jest.fn(),
      uploadGif: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GifsService,
        { provide: MongoGifsRepository, useValue: mockMongoGifsRepository },
      ],
    }).compile();

    service = module.get<GifsService>(GifsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getGifs', () => {
    it('should call mongoGifsRepository.getGifs with correct parameters', async () => {
      const title = 'test';
      const page = 1;
      const limit = 10;
      const mockGifs: GifDocument[] = [
        {
          type: 'gif',
          slug: 'example',
          url: 'http://example.com/gif',
          title: 'Example GIF',
        },
      ] as GifDocument[];

      (mockMongoGifsRepository.getGifs as jest.Mock).mockResolvedValue(
        mockGifs,
      );

      const result = await service.getGifs(title, page, limit);

      expect(mockMongoGifsRepository.getGifs).toHaveBeenCalledWith(
        title,
        page,
        limit,
      );
      expect(result).toEqual(mockGifs);
    });
  });

  describe('uploadGif', () => {
    it('should call mongoGifsRepository.uploadGif with correct parameters', async () => {
      const mockFile: Express.Multer.File = {
        originalname: 'test.gif',
        mimetype: 'image/gif',
        buffer: Buffer.from('test content'),
        fieldname: '',
        encoding: '',
        size: 0,
        stream: new Readable(),
        destination: '',
        filename: '',
        path: '',
      };
      const title = 'Test GIF';
      const mockGif: GifDocument = {
        type: 'gif',
        slug: 'example',
        url: 'http://example.com/gif',
        title: 'Example GIF',
      } as GifDocument;

      (mockMongoGifsRepository.uploadGif as jest.Mock).mockResolvedValue(
        mockGif,
      );

      const result = await service.uploadGif(mockFile, title);

      expect(mockMongoGifsRepository.uploadGif).toHaveBeenCalledWith(
        mockFile,
        title,
      );
      expect(result).toEqual(mockGif);
    });
  });
});
