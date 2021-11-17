import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Production } from '../Entities/production.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class ProductionService {
  constructor(
    @InjectRepository(Production)
    private productionRepository: Repository<Production>,
  ) {}

  findAll(): Promise<Production[]> {
    return this.productionRepository.find();
  }

  findOne(id: string): Promise<Production> {
    return this.productionRepository.findOne(id);
  }

  createProduction(production: Production): Promise<Production> {
    return this.productionRepository.save(production);
  }

  async updateProduction(
    id: string,
    production: Production,
  ): Promise<Production> {
    const todo = await this.productionRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.productionRepository.update(id, production);
    return await this.productionRepository.findOne(id);
  }

  async removeProduction(id: string): Promise<DeleteResult> {
    await this.productionRepository.findOneOrFail(id);
    return await this.productionRepository.delete(id);
  }
}
