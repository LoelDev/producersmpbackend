import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Plan } from '../entities/plan.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PlansService {
  constructor(
    @InjectRepository(Plan) private planRepository: Repository<Plan>,
  ) {}

  findAll(): Promise<Plan[]> {
    return this.planRepository.find();
  }

  findOne(id: string): Promise<Plan> {
    return this.planRepository.findOne(id);
  }

  createPlan(plan: Plan): Promise<Plan> {
    return this.planRepository.save(plan);
  }

  async updatePlan(id: string, plan: Plan): Promise<Plan> {
    const todo = await this.planRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.planRepository.update(id, plan);
    return await this.planRepository.findOne();
  }

  async removePlan(id: string): Promise<DeleteResult> {
    await this.planRepository.findOneOrFail(id);
    return await this.planRepository.delete(id);
  }
}
