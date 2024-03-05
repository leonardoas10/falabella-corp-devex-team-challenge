import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GifsController } from './gifs.controller';
import { GifsService } from './gifs.service';
import { GifSchema, GifModel } from './gif.schema'; // Import the schema and model

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Gif', schema: GifSchema }]), // Register the schema with Mongoose
  ],
  controllers: [GifsController],
  providers: [GifsService, GifModel], // Provide the GifModel along with the service
})
export class GifsModule {}
