import { User } from '../domain/entities/user.entity';
import { DeleteResult } from 'typeorm';

export interface UsersInterfaceService {
  findAll(): Promise<User[]>;
  findOne(id: string): Promise<User>;
  createUser(user: User): Promise<User>;
  updateUser(id: string, user: User): Promise<User>;
  removeUser(id: string): Promise<DeleteResult>;
}
