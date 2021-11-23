import { Track } from '../domain/entities/track.entity';
import { DeleteResult } from 'typeorm';

export interface TracksInterfaceService {
  findAll(): Promise<Track[]>;
  findOne(id: string): Promise<Track>;
  createTrack(track: Track): Promise<Track>;
  updateTrack(id: string, track: Track): Promise<Track>;
  removeTrack(id: string): Promise<DeleteResult>;
}
