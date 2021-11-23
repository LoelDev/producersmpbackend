import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tracks')
export class Track {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'music_sample_id' })
  musicSampleId: number;
  @Column()
  name: string;
  @Column({ name: 'is_finished' })
  isFinished: boolean;
  @Column()
  duration: string;
}
