import { Module } from '@nestjs/common';
import { TrackController } from '../api/controllers/track.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Track } from '../domain/entities/track.entity';
import { TrackService } from '../domain/services/track.service';

@Module({
  imports: [TypeOrmModule.forFeature([Track])],
  providers: [TrackService],
  controllers: [TrackController],
})
export class TrackModule {}
