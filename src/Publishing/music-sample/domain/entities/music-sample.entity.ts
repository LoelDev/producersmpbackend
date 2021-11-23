import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('music_samples')
export class MusicSample {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'song_name' })
  songName: string;
  @Column()
  description: string;
  @Column({ name: 'date_of_registry' })
  dateOfRegistry: string;
  @Column({ name: 'music_url' })
  musicUrl: string;
}
