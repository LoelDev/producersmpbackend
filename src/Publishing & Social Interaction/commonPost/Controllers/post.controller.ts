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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('common_posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const post = await this.postService.findOne(id);
    return response.status(HttpStatus.OK).json({ post });
  }

  @Get()
  async findAll(@Res() response) {
    const posts = await this.postService.findAll();
    return response.status(HttpStatus.OK).json({ posts });
  }

  @Post()
  async createPost(@Res() response, @Body() post: CPost) {
    const newPost = await this.postService.createPost(post);
    return response.status(HttpStatus.CREATED).json({ newPost });
  }
}
