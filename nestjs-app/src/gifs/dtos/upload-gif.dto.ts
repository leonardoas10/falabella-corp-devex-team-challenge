import { IsString, IsNotEmpty } from 'class-validator';

export class UploadGifDto {
  @IsString()
  @IsNotEmpty()
  title: string;
}
