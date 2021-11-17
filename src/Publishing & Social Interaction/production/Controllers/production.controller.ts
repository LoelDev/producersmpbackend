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
import { ProductionService } from '../Services/production.service';
import { Production } from '../Entities/production.entity';

@ApiTags('productions')
@Controller('productions')
export class ProductionController {
  constructor(private readonly productionService: ProductionService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const production = await this.productionService.findOne(id);
    return response.status(HttpStatus.OK).json({ production });
  }

  @Get()
  async findAll(@Res() response) {
    const productions = await this.productionService.findAll();
    return response.status(HttpStatus.OK).json({ productions });
  }

  @Post()
  async createProduction(@Res() response, @Body() production: Production) {
    const newProduction = await this.productionService.createProduction(
      production,
    );
    return response.status(HttpStatus.CREATED).json({ newProduction });
  }

  @Put('/:id')
  async updateById(
    @Res() response,
    @Body() production: Production,
    @Param('id') id,
  ) {
    const updateResult = await this.productionService.updateProduction(
      id,
      production,
    );
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeProduction(@Param('id') id: string) {
    return this.productionService.removeProduction(id);
  }
}
