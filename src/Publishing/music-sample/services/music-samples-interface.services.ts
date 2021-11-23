import { MusicSample } from '../domain/entities/music-sample.entity';
import { DeleteResult } from 'typeorm';

export interface MusicSamplesInterfaceServices {
  findAll(): Promise<MusicSample[]>;
  findOne(id: string): Promise<MusicSample>;
  createMusicSample(musicSample: MusicSample): Promise<MusicSample>;
  updateMusicSample(id: string, musicSample: MusicSample): Promise<MusicSample>;
  removeMusicSample(id: string): Promise<DeleteResult>;
}
