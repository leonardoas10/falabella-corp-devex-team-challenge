import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetGifsDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  limit?: number;
}
