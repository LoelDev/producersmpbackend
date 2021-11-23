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
import { PlansService } from '../../domain/services/plans.service';
import { Plan } from '../../domain/entities/plan.entity';

@ApiTags('plans')
@Controller('plans')
export class PlansController {
  constructor(private readonly planService: PlansService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const plan = await this.planService.findOne(id);
    return response.status(HttpStatus.OK).json({ plan });
  }

  @Get()
  async findAll(@Res() response) {
    const plan = await this.planService.findAll();
    return response.status(HttpStatus.OK).json({ plan });
  }

  @Post()
  async createPlan(@Res() response, @Body() plan: Plan) {
    const newPlan = await this.planService.createPlan(plan);
    return response.status(HttpStatus.CREATED).json({ newPlan });
  }

  @Put('/:id')
  async updateById(@Res() response, @Body() plan: Plan, @Param('id') id) {
    const updateResult = await this.planService.updatePlan(id, plan);
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removePlan(@Param('id') id: string) {
    return this.planService.removePlan(id);
  }
}
