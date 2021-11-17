import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CPost } from '../Entities/post.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(CPost)
    private postRepository: Repository<CPost>,
  ) {}

  findAll(): Promise<CPost[]> {
    return this.postRepository.find();
  }

  findOne(id: string): Promise<CPost> {
    return this.postRepository.findOne(id);
  }

  createPost(post: CPost): Promise<CPost> {
    return this.postRepository.save(post);
  }

  async updatePost(id: string, post: CPost): Promise<CPost> {
    const todo = await this.postRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.postRepository.update(id, post);
    return await this.postRepository.findOne(id);
  }

  async removePost(id: string): Promise<DeleteResult> {
    await this.postRepository.findOneOrFail(id);
    return await this.postRepository.delete(id);
  }
}
