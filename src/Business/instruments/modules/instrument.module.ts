import { Module } from '@nestjs/common';
import { InstrumentService } from '../domain/services/instrument.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Instrument } from '../domain/entities/instrument.entity';
import { InstrumentController } from '../api/controllers/instrument.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Instrument])],
  providers: [InstrumentService],
  controllers: [InstrumentController],
})
export class InstrumentModule {}
