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
import { ImportZipAudioService } from '../../domain/services/import-zip-audio.service';
import { ApiTags } from '@nestjs/swagger';
import { ImportZipAudio } from '../../domain/entities/import-zip-audio.entity';

@ApiTags('import-zip-audios')
@Controller('import-zip-audios')
export class ImportZipAudioController {
  constructor(private readonly importZipAudioService: ImportZipAudioService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const importZipAudio = await this.importZipAudioService.findOne(id);
    return response.status(HttpStatus.OK).json({ importZipAudio });
  }

  @Get()
  async findAll(@Res() response) {
    const importZipAudios = await this.importZipAudioService.findAll();
    return response.status(HttpStatus.OK).json({ importZipAudios });
  }

  @Post()
  async createZip(@Res() response, @Body() importZipAudio: ImportZipAudio) {
    const newZip = await this.importZipAudioService.createZip(importZipAudio);
    return response.status(HttpStatus.CREATED).json({ newZip });
  }

  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() importZipAudio: ImportZipAudio,
    @Param('id') id,
  ) {
    const updateResult = await this.importZipAudioService.updateZip(
      id,
      importZipAudio,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeZip(@Param('id') id: string) {
    return this.importZipAudioService.removeZip(id);
  }
}
