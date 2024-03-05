// mongo-gifs.repository.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { Express } from 'express';

import { GifDocument } from '../gif.schema';
import { generateSlug } from '../../utils/utils';

@Injectable()
export class MongoGifsRepository {
  private readonly s3: S3;
  private readonly configService: ConfigService;

  constructor(
    @InjectModel('Gif') private readonly gifModel: Model<GifDocument>,
    configService: ConfigService,
  ) {
    this.configService = configService;
    this.s3 = new S3({
      accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
      secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY'),
      region: configService.get('AWS_DEFAULT_REGION'),
    });
  }

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

  async uploadGif(file: Express.Multer.File, title: string): Promise<any> {
    try {
      const slug = generateSlug(title);
      const uploadParams = {
        Bucket: this.configService.get('AWS_S3_BUCKET'),
        Key: `gifs/${uuidv4()}-${slug}.gif`, // Unique key for the file in S3
        Body: file.buffer, // Assuming 'file' is the file object uploaded
        ContentType: file.mimetype,
      };

      // Upload file to S3
      const uploadResult = await this.s3.upload(uploadParams).promise();

      // Check if upload to S3 was successful
      if (uploadResult && uploadResult.Location) {
        const url = uploadResult.Location;

        // Create GIF document in MongoDB
        const newGif = await this.gifModel.create({ title, url, slug });
        return newGif;
      }
      throw new Error('Upload to S3 failed');
    } catch (error) {
      throw new Error(`Unable to upload GIFs: ${error}`);
    }
  }
}
