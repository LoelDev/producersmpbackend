import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../entities/profile.entity';
import { DeleteResult, Repository } from 'typeorm';
import { ProfilesInterfaceServices } from '../../services/profiles-interface.services';

@Injectable()
export class ProfileService implements ProfilesInterfaceServices {
  constructor(
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  findAll(): Promise<Profile[]> {
    return this.profileRepository.find();
  }

  findOne(id: string): Promise<Profile> {
    return this.profileRepository.findOne(id);
  }

  createProfile(profile: Profile): Promise<Profile> {
    return this.profileRepository.save(profile);
  }

  async updateProfile(id: string, profile: Profile): Promise<Profile> {
    const todo = await this.profileRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.profileRepository.update(id, profile);
    return await this.profileRepository.findOne(id);
  }

  async removeProfile(id: string): Promise<DeleteResult> {
    await this.profileRepository.findOneOrFail(id);
    return await this.profileRepository.delete(id);
  }
}
