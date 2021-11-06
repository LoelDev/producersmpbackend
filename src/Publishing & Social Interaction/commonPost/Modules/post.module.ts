import { Module } from '@nestjs/common';
import { PostService } from '../Services/post.service';
import { PostController } from '../Controllers/post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CPost } from '../Entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CPost])],
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
