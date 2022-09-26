import { Controller, Get, Post, Body, Param, Redirect } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  shortenUrl(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.shortenUrl(createUrlDto);
  }

  @Get()
  findAllUrls() {
    return this.urlService.findAll();
  }

  @Get(':code')
  @Redirect()
  async redirect(
    @Param('code')
    code: string,
  ) {
    const url = await this.urlService.redirectUrl(code);
    return { url: url.longUrl };
  }
}
