import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('music_samples')
export class MusicSample {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number; //userId
  @Column({ default: null })
  songName: string;
  @Column({ default: null })
  description: string;
  @Column({ default: null })
  dateOfRegistry: string;
  @Column({ default: null })
  musicUrl: string;
}
