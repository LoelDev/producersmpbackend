import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libraries')
export class Library {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'instrument_id' })
  instrumentId: number;
  @Column({ name: 'library_name' })
  libraryName: string;
}
