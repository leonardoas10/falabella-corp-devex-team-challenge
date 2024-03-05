// mongo-gifs.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GifDocument } from '../gif.schema';

@Injectable()
export class MongoGifsRepository {
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

  async uploadGif(file: File, title: string): Promise<any> {
    try {
      console.log('file > ', file);
      console.log('title => ', title);
    } catch (error) {
      throw new Error(`Unable to upload GIFs: ${error}`);
    }
  }
}
