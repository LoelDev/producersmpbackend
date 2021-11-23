import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libraries')
export class Library {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'instrument_id', default: null })
  instrumentId: number;
  @Column({ name: 'library_name', default: null })
  libraryName: string;
}
