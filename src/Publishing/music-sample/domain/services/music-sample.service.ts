import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MusicSample } from '../entities/music-sample.entity';
import { DeleteResult, Repository } from 'typeorm';
import { MusicSamplesInterfaceServices } from '../../services/music-samples-interface.services';

@Injectable()
export class MusicSampleService implements MusicSamplesInterfaceServices {
  constructor(
    @InjectRepository(MusicSample)
    private musicSampleRepository: Repository<MusicSample>,
  ) {}

  findAll(): Promise<MusicSample[]> {
    return this.musicSampleRepository.find();
  }

  findOne(id: string): Promise<MusicSample> {
    return this.musicSampleRepository.findOne(id);
  }

  createMusicSample(musicSample: MusicSample): Promise<MusicSample> {
    return this.musicSampleRepository.save(musicSample);
  }

  async updateMusicSample(
    id: string,
    musicSample: MusicSample,
  ): Promise<MusicSample> {
    const todo = await this.musicSampleRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.musicSampleRepository.update(id, musicSample);
    return await this.musicSampleRepository.findOne(id);
  }

  async removeMusicSample(id: string): Promise<DeleteResult> {
    await this.musicSampleRepository.findOneOrFail(id);
    return await this.musicSampleRepository.delete(id);
  }
}
