import { Controller, Get, Query } from '@nestjs/common';
import { GifsService } from './gifs.service';
import { GifDocument } from './gif.schema';

@Controller('gifs')
export class GifsController {
  constructor(private readonly gifsService: GifsService) {}

  @Get()
  async getGifs(@Query() query): Promise<GifDocument[]> {
    const { page = 1, limit = 10, title = null } = query;
    return this.gifsService.getGifs(title, +page, +limit);
  }
}
