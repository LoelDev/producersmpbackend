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
import { LibraryService } from '../../domain/services/library.service';
import { Library } from '../../domain/entities/library.entity';

@ApiTags('libraries')
@Controller('libraries')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const library = await this.libraryService.findOne(id);
    return response.status(HttpStatus.OK).json({ library });
  }

  @Get()
  async findAll(@Res() response) {
    const libraries = await this.libraryService.findAll();
    return response.status(HttpStatus.OK).json({ libraries });
  }

  @Post()
  async creatLibrary(@Res() response, @Body() library: Library) {
    const newLibrary = await this.libraryService.createLibrary(library);
    return response.status(HttpStatus.CREATED).json({ newLibrary });
  }

  @Put('/:id')
  async updateById(@Res() response, @Body() library: Library, @Param('id') id) {
    const updateResult = await this.libraryService.updateLibrary(id, library);
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeLibrary(@Param('id') id: string) {
    return this.libraryService.removeLibrary(id);
  }
}
