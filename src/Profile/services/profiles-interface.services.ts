import { Profile } from '../domain/entities/profile.entity';
import { DeleteResult } from 'typeorm';

export interface ProfilesInterfaceServices {
  findAll(): Promise<Profile[]>;
  findOne(id: string): Promise<Profile>;
  createProfile(profile: Profile): Promise<Profile>;
  updateProfile(id: string, profile: Profile): Promise<Profile>;
  removeProfile(id: string): Promise<DeleteResult>;
}
