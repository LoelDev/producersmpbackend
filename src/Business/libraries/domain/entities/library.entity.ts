import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('libraries')
export class Library {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  instrumentId: number;
  @Column()
  libraryName: string;
}
