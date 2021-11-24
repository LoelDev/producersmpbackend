import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, IsString } from 'class-validator';

@Entity('instruments')
export class Instrument {
  @PrimaryGeneratedColumn()
  id: number;
  @IsString()
  @IsDefined()
  @Column({ name: 'name_instrument', default: null })
  nameInstrument: string;
}
