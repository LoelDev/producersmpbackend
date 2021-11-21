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
import { ApiTags } from '@nestjs/swagger';
import { MusicSampleService } from '../../domain/services/music-sample.service';
import { MusicSample } from '../../domain/entities/music-sample.entity';

@ApiTags('music-samples')
@Controller('music-samples')
export class MusicSampleController {
  constructor(private readonly musicSampleService: MusicSampleService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const musicSample = await this.musicSampleService.findOne(id);
    return response.status(HttpStatus.OK).json({ musicSample });
  }

  @Get()
  async findAll(@Res() response) {
    const musicSample = await this.musicSampleService.findAll();
    return response.status(HttpStatus.OK).json({ musicSample });
  }

  @Post()
  async createMusicSample(@Res() response, @Body() musicSample: MusicSample) {
    const newMusicSample = await this.musicSampleService.createMusicSample(
      musicSample,
    );
    return response.status(HttpStatus.CREATED).json({ newMusicSample });
  }

  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() musicSample: MusicSample,
    @Param('id') id,
  ) {
    const updateResult = await this.musicSampleService.updateMusicSample(
      id,
      musicSample,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeMusicSample(@Param('id') id: string) {
    return this.musicSampleService.removeMusicSample(id);
  }
}
