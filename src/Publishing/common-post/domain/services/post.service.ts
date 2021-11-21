import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommonPost } from '../entities/post.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(CommonPost)
    private postRepository: Repository<CommonPost>,
  ) {}

  findAll(): Promise<CommonPost[]> {
    return this.postRepository.find();
  }

  findOne(id: string): Promise<CommonPost> {
    return this.postRepository.findOne(id);
  }

  createPost(post: CommonPost): Promise<CommonPost> {
    return this.postRepository.save(post);
  }

  async updatePost(id: string, post: CommonPost): Promise<CommonPost> {
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
