// gifs.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GifsController } from './gifs.controller';
import { GifsService } from './gifs.service';
import { GifSchema } from './gif.schema';
import { MongoGifsRepository } from './repositories/mongo-gifs.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Gif', schema: GifSchema }])],
  controllers: [GifsController],
  providers: [GifsService, MongoGifsRepository],
})
export class GifsModule {}
