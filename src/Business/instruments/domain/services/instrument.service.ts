import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Instrument } from '../entities/instrument.entity';

@Injectable()
export class InstrumentService {
  constructor(
    @InjectRepository(Instrument)
    private instrumentRepository: Repository<Instrument>,
  ) {}

  findAll(): Promise<Instrument[]> {
    return this.instrumentRepository.find();
  }

  findOne(id: string): Promise<Instrument> {
    return this.instrumentRepository.findOne(id);
  }

  createInstrument(instrument: Instrument): Promise<Instrument> {
    return this.instrumentRepository.save(instrument);
  }

  async updateInstrument(
    id: string,
    instrument: Instrument,
  ): Promise<Instrument> {
    const todo = await this.instrumentRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.instrumentRepository.update(id, instrument);
    return await this.instrumentRepository.findOne(id);
  }

  async removeInstrument(id: string): Promise<DeleteResult> {
    await this.instrumentRepository.findOneOrFail(id);
    return await this.instrumentRepository.delete(id);
  }
}
