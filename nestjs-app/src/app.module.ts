import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GifsModule } from './gifs/gifs.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_USERNAME')}:${configService.get('MONGO_PASSWORD')}@${configService.get('MONGO_HOSTNAME')}:${configService.get('MONGO_PORT')}/${configService.get('MONGO_DB')}?authSource=admin`,
      }),
      inject: [ConfigService],
    }),
    GifsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
