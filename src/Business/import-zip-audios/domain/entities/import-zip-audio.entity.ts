import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('import_zip_audios')
export class ImportZipAudio {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'track_id' })
  trackId: number;
  @Column({ name: 'name_zip' })
  nameZip: string;
  @Column({ name: 'date_of_download' })
  dateOfDownload: string;
  @Column({ name: 'is_final_version' })
  isFinalVersion: boolean;
}
