import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { PostService } from '../Services/post.service';
import { CPost } from '../Entities/post.entity';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Res() response, @Body() post: CPost) {
    const newPost = await this.postService.createPost(post);
    return response.status(HttpStatus.CREATED).json({ newPost });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const post = await this.postService.findOne(id);
    return response.status(HttpStatus.OK).json({ post });
  }
}
