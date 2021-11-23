import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UsersInterfaceService } from '../../services/users-interface.service';

@Injectable()
export class UserService implements UsersInterfaceService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }
  createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
  async updateUser(id: string, user: User): Promise<User> {
    const todo = await this.userRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.userRepository.update(id, user);
    return await this.userRepository.findOne(id);
  }
  async removeUser(id: string): Promise<DeleteResult> {
    await this.userRepository.findOneOrFail(id);
    return await this.userRepository.delete(id);
  }
}
