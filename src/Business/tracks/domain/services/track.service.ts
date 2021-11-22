import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Track } from '../entities/track.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class TrackService {
  constructor(
    @InjectRepository(Track)
    private trackRepository: Repository<Track>,
  ) {}

  findAll(): Promise<Track[]> {
    return this.trackRepository.find();
  }

  findOne(id: string): Promise<Track> {
    return this.trackRepository.findOne(id);
  }

  createTrack(track: Track): Promise<Track> {
    return this.trackRepository.save(track);
  }

  async updateTrack(id: string, track: Track): Promise<Track> {
    const todo = await this.trackRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.trackRepository.update(id, track);
    return await this.trackRepository.findOne(id);
  }

  async removeTrack(id: string): Promise<DeleteResult> {
    await this.trackRepository.findOneOrFail(id);
    return await this.trackRepository.delete(id);
  }
}
