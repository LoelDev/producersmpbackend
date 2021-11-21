import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Production } from '../domain/entities/production.entity';
import { ProductionService } from '../domain/services/production.service';
import { ProductionController } from '../api/controllers/production.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Production])],
  providers: [ProductionService],
  controllers: [ProductionController],
})
export class ProductionModule {}
