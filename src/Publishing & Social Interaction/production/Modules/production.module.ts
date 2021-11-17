import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Production } from '../Entities/production.entity';
import { ProductionService } from '../Services/production.service';
import { ProductionController } from '../Controllers/production.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Production])],
  providers: [ProductionService],
  controllers: [ProductionController],
})
export class ProductionModule {}
