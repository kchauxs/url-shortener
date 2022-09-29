import { Controller, Get, Post, Body, Param, Redirect } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './entities/url.entity';

@ApiTags('Url')
@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  @ApiResponse({
    status: 201,
    description: 'Url was created and shorten',
    type: Url,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  shortenUrl(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.shortenUrl(createUrlDto);
  }

  @Get(':urlCode')
  @Redirect()
  @ApiResponse({
    status: 200,
    description: 'Redirect to original url',
  })
  @ApiResponse({ status: 404, description: 'Resource Not Found' })
  async redirect(
    @Param('urlCode')
    urlCode: string,
  ) {
    const url = await this.urlService.redirectUrl(urlCode);
    return { url: url.longUrl };
  }

  @Get()
  findAllUrls() {
    return this.urlService.findAllUrls();
  }
}
