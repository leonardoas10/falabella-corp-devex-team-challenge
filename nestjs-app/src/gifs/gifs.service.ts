// gifs.service.ts
import { Injectable } from '@nestjs/common';
import { Express } from 'express';

import { GifDocument } from './gif.schema';
import { MongoGifsRepository } from './repositories/mongo-gifs.repository';
@Injectable()
export class GifsService {
  constructor(private readonly mongoGifsRepository: MongoGifsRepository) {}

  async getGifs(
    title: string,
    page: number,
    limit: number,
  ): Promise<GifDocument[]> {
    return this.mongoGifsRepository.getGifs(title, page, limit);
  }

  async uploadGif(
    file: Express.Multer.File,
    title: string,
  ): Promise<GifDocument> {
    return this.mongoGifsRepository.uploadGif(file, title);
  }
}
