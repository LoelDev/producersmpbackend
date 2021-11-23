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
import { TrackService } from '../../domain/services/track.service';
import { Track } from '../../domain/entities/track.entity';

@ApiTags('tracks')
@Controller('tracks')
export class TrackController {
  constructor(private readonly trackService: TrackService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const track = await this.trackService.findOne(id);
    return response.status(HttpStatus.OK).json({ track });
  }

  @Get()
  async findAll(@Res() response) {
    const tracks = await this.trackService.findAll();
    return response.status(HttpStatus.OK).json({ tracks });
  }

  @Post()
  async creatTrack(@Res() response, @Body() track: Track) {
    const newTrack = await this.trackService.createTrack(track);
    return response.status(HttpStatus.CREATED).json({ newTrack });
  }

  @Put('/:id')
  async updateById(@Res() response, @Body() track: Track, @Param('id') id) {
    const updateResult = await this.trackService.updateTrack(id, track);
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeTrack(@Param('id') id: string) {
    return this.trackService.removeTrack(id);
  }
}
