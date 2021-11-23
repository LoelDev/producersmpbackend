import { Module } from '@nestjs/common';
import { ImportZipAudioController } from '../api/controllers/import-zip-audio.controller';
import { ImportZipAudioService } from '../domain/services/import-zip-audio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImportZipAudio } from '../domain/entities/import-zip-audio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ImportZipAudio])],
  controllers: [ImportZipAudioController],
  providers: [ImportZipAudioService],
})
export class ImportZipAudioModule {}
