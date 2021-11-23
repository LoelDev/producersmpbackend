import { DeleteResult } from 'typeorm';
import { Instrument } from '../domain/entities/instrument.entity';

export interface InstrumentsInterfaceService {
  findAll(): Promise<Instrument[]>;
  findOne(id: string): Promise<Instrument>;
  createInstrument(instrument: Instrument): Promise<Instrument>;
  updateInstrument(id: string, instrument: Instrument): Promise<Instrument>;
  removeInstrument(id: string): Promise<DeleteResult>;
}
