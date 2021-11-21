import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('music_samples')
export class MusicSample {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number; //userId
  @Column({ default: null })
  song_name: string;
  @Column({ default: null })
  description: string;
  @Column({ default: null })
  date_of_registry: string;
  @Column({ default: null })
  music_url: string;
}
