import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { GifsService } from './gifs.service';
import { GifDocument } from './gif.schema';
// TODO create Middleware for upload file
@Controller('gifs')
export class GifsController {
  constructor(private readonly gifsService: GifsService) {}

  @Get()
  async getGifs(@Query() query): Promise<GifDocument[]> {
    const { page = 1, limit = 10, title = null } = query;
    return this.gifsService.getGifs(title, +page, +limit);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadGif(
    @UploadedFile() file,
    @Body('title') title: string,
  ): Promise<GifDocument> {
    return this.gifsService.uploadGif(file, title);
  }
}
