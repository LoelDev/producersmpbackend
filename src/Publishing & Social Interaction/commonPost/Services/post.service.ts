import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CPost } from '../Entities/post.entity';
import { Repository } from 'typeorm';

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
}
