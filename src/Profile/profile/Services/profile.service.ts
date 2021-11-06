import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from '../Entities/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService {
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
}
