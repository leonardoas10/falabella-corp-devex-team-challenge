import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Readable } from 'stream';

import { GifsController } from './gifs.controller';
import { GifsService } from './gifs.service';
import { GifDocument } from './gif.schema';

describe('GifsController', () => {
  let controller: GifsController;
  let gifsService: GifsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GifsController],
      providers: [
        {
          provide: GifsService,
          useValue: {
            getGifs: jest.fn(),
            uploadGif: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<GifsController>(GifsController);
    gifsService = module.get<GifsService>(GifsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getGifs', () => {
    it('should call gifsService.getGifs with correct parameters', async () => {
      const mockGifs: GifDocument[] = [
        {
          type: 'gif',
          slug: 'example',
          url: 'http://example.com/gif',
          title: 'Example GIF',
        },
      ] as GifDocument[];
      const query = { page: 1, limit: 10, title: 'example' };

      jest.spyOn(gifsService, 'getGifs').mockResolvedValue(mockGifs);

      const result = await controller.getGifs(query);

      expect(gifsService.getGifs).toHaveBeenCalledWith('example', 1, 10);
      expect(result).toEqual(mockGifs);
    });
  });

  describe('uploadGif', () => {
    it('should call gifsService.uploadGif with correct parameters', async () => {
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
      const uploadGifDto = { title: 'Test GIF' };

      const mockGif: GifDocument = {
        type: 'gif',
        slug: 'example',
        url: 'http://example.com/gif',
        title: 'Example GIF',
      } as GifDocument;

      jest.spyOn(gifsService, 'uploadGif').mockResolvedValue(mockGif);

      await controller.uploadGif(mockFile, uploadGifDto);

      expect(gifsService.uploadGif).toHaveBeenCalledWith(mockFile, 'Test GIF');
    });

    it('should throw BadRequestException if file is not provided', async () => {
      const uploadGifDto = { title: 'Test GIF' };

      await expect(
        controller.uploadGif(undefined, uploadGifDto),
      ).rejects.toThrow(BadRequestException);
    });

    it('should throw BadRequestException if file mimetype is not "image/gif"', async () => {
      const mockFile: Express.Multer.File = {
        originalname: 'test.gif',
        mimetype: 'image/jpg',
        buffer: Buffer.from('test content'),
        fieldname: '',
        encoding: '',
        size: 0,
        stream: new Readable(),
        destination: '',
        filename: '',
        path: '',
      };
      const uploadGifDto = { title: 'Test GIF' };

      await expect(
        controller.uploadGif(mockFile, uploadGifDto),
      ).rejects.toThrow(BadRequestException);
    });
  });
});
