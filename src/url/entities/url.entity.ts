import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'urls' })
export class Url {
  @ApiProperty({
    example: '33',
    description: 'Url ID',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '5HyKjRog7yo',
    description: 'Shortened url code',
    uniqueItems: true,
  })
  @Column()
  urlCode: string;

  @ApiProperty({
    example: 'https://docs.nestjs.com/',
    description: 'URL to shorten',
    uniqueItems: true,
  })
  @Column()
  longUrl: string;

  @ApiProperty({
    example: 'http://localhost:3033/api/v1/url/5HyKjRog7yo',
    description: 'shortened URL',
    uniqueItems: true,
  })
  @Column()
  shortUrl: string;
}
