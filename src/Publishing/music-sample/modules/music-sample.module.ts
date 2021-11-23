import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicSample } from '../domain/entities/music-sample.entity';
import { MusicSampleService } from '../domain/services/music-sample.service';
import { MusicSampleController } from '../api/controllers/music-sample.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MusicSample])],
  providers: [MusicSampleService],
  controllers: [MusicSampleController],
})
export class MusicSampleModule {}
