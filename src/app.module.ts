import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UrlModule } from './url/url.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from './url/entities/url.entity';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: `${process.env.DB_NAME}.sqlite`,
      entities: [Url],
      synchronize: process.env.STAGE !== 'prod',
    }),
    UrlModule,
    SeedModule,
  ],
})
export class AppModule {}
