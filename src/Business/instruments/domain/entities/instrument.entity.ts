import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('instruments')
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nameInstrument: string;
}
