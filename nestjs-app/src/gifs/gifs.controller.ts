import {
  Controller,
  Get,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { GifsService } from './gifs.service';
import { GifDocument } from './gif.schema';
import { UploadGifDto } from './dtos/upload-gif.dto';
import { GetGifsDto } from './dtos/get-gifs.dto';
@Controller('gifs')
export class GifsController {
  constructor(private readonly gifsService: GifsService) {}

  @Get()
  async getGifs(@Query() query: GetGifsDto): Promise<GifDocument[]> {
    const { page = 1, limit = 10, title = null } = query;
    return this.gifsService.getGifs(title, +page, +limit);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadGif(
    @UploadedFile() file: Express.Multer.File,
    @Body() uploadGifDto: UploadGifDto,
  ): Promise<GifDocument> {
    // Check if file is a GIF
    if (!file || file.mimetype !== 'image/gif') {
      throw new BadRequestException('Uploaded file must be in GIF format');
    }
    return this.gifsService.uploadGif(file, uploadGifDto.title);
  }
}
