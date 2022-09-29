import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Url } from 'src/url/entities/url.entity';
import { UrlService } from 'src/url/url.service';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Url)
    private readonly urlRepository: Repository<Url>,
    private readonly urlService: UrlService,
  ) {}

  async runSeed() {
    await this.deleteTables();
    await this.insertUrls();
    return 'SEED EXECUTED';
  }

  private async insertUrls() {
    const seedUrls = initialData.urls;
    const urls: Url[] = [];
    seedUrls.forEach((url) => {
      urls.push(this.urlRepository.create(url));
    });
    await this.urlRepository.save(seedUrls);
  }
  private async deleteTables() {
    await this.urlService.deleteAllUrls();
  }
}
