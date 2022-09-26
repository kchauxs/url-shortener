import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { nanoid } from 'nanoid';
import { CreateUrlDto } from './dto/create-url.dto';
import { Url } from './entities/url.entity';
import { ConfigService } from '@nestjs/config';
import { protocolFilter } from './helper/protocolFilter';

@Injectable()
export class UrlService {
  private readonly logger = new Logger('UrlService');
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
    private readonly configService: ConfigService,
  ) {}

  async shortenUrl(createUrlDto: CreateUrlDto) {
    const { longUrl } = createUrlDto;

    if (!protocolFilter(longUrl))
      throw new BadRequestException(
        `Protocol not found in url '${longUrl}', must start with 'http://{url}' or https://{url}`,
      );

    const urlCode = nanoid(10);
    const baseURL = `${this.configService.get('HOST_API')}/url`;

    try {
      let url = await this.urlRepository.findOneBy({ longUrl });
      if (url) {
        delete url.id;
        return url;
      }
      const shortUrl = `${baseURL}/${urlCode}`;
      url = this.urlRepository.create({
        urlCode,
        longUrl,
        shortUrl,
      });
      this.urlRepository.save(url);
      return url;
    } catch (error) {
      this.handleDBExceptions(error);
    }
  }

  async redirectUrl(urlCode: string) {
    const url = await this.urlRepository.findOneBy({ urlCode });
    if (!url) throw new NotFoundException('Resource Not Found');
    return url;
  }

  async findAll() {
    let urls = await this.urlRepository.find();
    return urls;
  }

  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }
}
