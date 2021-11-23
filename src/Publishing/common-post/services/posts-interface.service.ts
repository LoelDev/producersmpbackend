import { CommonPost } from '../domain/entities/post.entity';
import { DeleteResult } from 'typeorm';

export interface PostsInterfaceService {
  findAll(): Promise<CommonPost[]>;
  findOne(id: string): Promise<CommonPost>;
  createPost(post: CommonPost): Promise<CommonPost>;
  updatePost(id: string, post: CommonPost): Promise<CommonPost>;
  removePost(id: string): Promise<DeleteResult>;
}
