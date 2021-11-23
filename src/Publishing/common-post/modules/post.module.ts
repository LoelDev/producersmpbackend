import { Module } from '@nestjs/common';
import { PostService } from '../domain/services/post.service';
import { PostController } from '../api/controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonPost } from '../domain/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CommonPost])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
