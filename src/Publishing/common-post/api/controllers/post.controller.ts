import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { PostService } from '../../domain/services/post.service';
import { CommonPost } from '../../domain/entities/post.entity';
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
  async createPost(@Res() response, @Body() post: CommonPost) {
    const newPost = await this.postService.createPost(post);
    return response.status(HttpStatus.CREATED).json({ newPost });
  }

  @Put('/:id')
  async updateById(@Res() response, @Body() post: CommonPost, @Param('id') id) {
    const updateResult = await this.postService.updatePost(id, post);
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removePost(@Param('id') id: string) {
    return this.postService.removePost(id);
  }
}
