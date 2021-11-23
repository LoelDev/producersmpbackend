import { Plan } from '../domain/entities/plan.entity';
import { DeleteResult } from 'typeorm';

export interface PlansInterfaceService {
  findAll(): Promise<Plan[]>;
  findOne(id: string): Promise<Plan>;
  createPlan(plan: Plan): Promise<Plan>;
  updatePlan(id: string, plan: Plan): Promise<Plan>;
  removePlan(id: string): Promise<DeleteResult>;
}
