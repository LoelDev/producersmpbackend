import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  musicSampleId: number;
  @Column()
  name: string;
  @Column()
  isFinished: boolean;
  @Column()
  duration: string;
}
