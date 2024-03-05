import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetGifsDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  page?: number;

  @IsOptional()
  @IsString()
  limit?: number;
}
