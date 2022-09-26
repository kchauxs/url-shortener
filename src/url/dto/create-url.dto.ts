import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreateUrlDto {
  @ApiProperty({
    description: 'URL to shorten',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @IsUrl()
  longUrl: string;
}
