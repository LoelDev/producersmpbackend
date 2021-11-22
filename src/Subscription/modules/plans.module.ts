import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Plan } from '../domain/entities/plan.entity';
import { PlansService } from '../domain/services/plans.service';
import { PlansController } from '../api/controllers/plans.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Plan])],
  providers: [PlansService],
  controllers: [PlansController],
})
export class PlansModule {}
