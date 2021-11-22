import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { ImportZipAudio } from '../entities/import-zip-audio.entity';

@Injectable()
export class ImportZipAudioService {
  constructor(
    @InjectRepository(ImportZipAudio)
    private importZipAudioRepository: Repository<ImportZipAudio>,
  ) {}

  findAll(): Promise<ImportZipAudio[]> {
    return this.importZipAudioRepository.find();
  }

  findOne(id: string): Promise<ImportZipAudio> {
    return this.importZipAudioRepository.findOne(id);
  }

  createZip(importZipAudio: ImportZipAudio): Promise<ImportZipAudio> {
    return this.importZipAudioRepository.save(importZipAudio);
  }

  async updateZip(
    id: string,
    importZipAudio: ImportZipAudio,
  ): Promise<ImportZipAudio> {
    const todo = await this.importZipAudioRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.importZipAudioRepository.update(id, importZipAudio);
    return await this.importZipAudioRepository.findOne(id);
  }

  async removeZip(id: string): Promise<DeleteResult> {
    await this.importZipAudioRepository.findOneOrFail(id);
    return await this.importZipAudioRepository.delete(id);
  }
}
