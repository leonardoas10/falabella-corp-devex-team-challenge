// gifs.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GifDocument } from './gif.schema';

@Injectable()
export class GifsService {
  constructor(
    @InjectModel('Gif') private readonly gifModel: Model<GifDocument>,
  ) {}

  async getGifs(
    title: string,
    page: number,
    limit: number,
  ): Promise<GifDocument[]> {
    try {
      let query = this.gifModel.find();

      if (title) {
        // If title is provided, filter GIFs by title matching any part of the provided string
        query = query.where('title').regex(new RegExp(title, 'i'));
      }

      const gifs = await query
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();
      return gifs;
    } catch (error) {
      throw new Error(`Unable to fetch GIFs: ${error}`);
    }
  }
}
