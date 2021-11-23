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
import { InstrumentService } from '../../domain/services/instrument.service';
import { Instrument } from '../../domain/entities/instrument.entity';

@ApiTags('instruments')
@Controller('instruments')
export class InstrumentController {
  constructor(private readonly instrumentService: InstrumentService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const instrument = await this.instrumentService.findOne(id);
    return response.status(HttpStatus.OK).json({ instrument });
  }

  @Get()
  async findAll(@Res() response) {
    const instruments = await this.instrumentService.findAll();
    return response.status(HttpStatus.OK).json({ instruments });
  }

  @Post()
  async creatInstrument(@Res() response, @Body() instrument: Instrument) {
    const newInstrument = await this.instrumentService.createInstrument(
      instrument,
    );
    return response.status(HttpStatus.CREATED).json({ newInstrument });
  }

  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() instrument: Instrument,
    @Param('id') id,
  ) {
    const updateResult = await this.instrumentService.updateInstrument(
      id,
      instrument,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeInstrument(@Param('id') id: string) {
    return this.instrumentService.removeInstrument(id);
  }
}
