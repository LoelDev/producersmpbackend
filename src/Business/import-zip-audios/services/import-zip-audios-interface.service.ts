import { ImportZipAudio } from '../domain/entities/import-zip-audio.entity';
import { DeleteResult } from 'typeorm';

export interface ImportZipAudiosInterfaceService {
  findAll(): Promise<ImportZipAudio[]>;
  findOne(id: string): Promise<ImportZipAudio>;
  createZip(importZipAudio: ImportZipAudio): Promise<ImportZipAudio>;
  updateZip(
    id: string,
    importZipAudio: ImportZipAudio,
  ): Promise<ImportZipAudio>;
  removeZip(id: string): Promise<DeleteResult>;
}
