import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, IsString, Length } from 'class-validator';

@Entity('music_samples')
export class MusicSample {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id', default: null })
  userId: number;
  @Column({ name: 'song_name', default: null })
  songName: string;
  @IsDefined()
  @Length(30)
  @Column()
  description: string;
  @Column({ name: 'date_of_registry', default: null })
  dateOfRegistry: string;
  @IsString()
  @IsDefined()
  @Column({ name: 'music_url', default: null })
  musicUrl: string;
}
