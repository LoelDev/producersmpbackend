import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'music_sample_id', default: null })
  musicSampleId: number;
  @Column()
  name: string;
  @Column({ name: 'is_finished', default: false })
  isFinished: boolean;
  @Column()
  duration: string;
}
