import { Production } from '../domain/entities/production.entity';
import { DeleteResult } from 'typeorm';

export interface ProductionsInterfaceService {
  findAll(): Promise<Production[]>;
  findOne(id: string): Promise<Production>;
  createProduction(production: Production): Promise<Production>;
  updateProduction(id: string, production: Production): Promise<Production>;
  removeProduction(id: string): Promise<DeleteResult>;
}
