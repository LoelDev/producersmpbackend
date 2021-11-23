import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('import_zip_audios')
export class ImportZipAudio {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'track_id', default: null })
  trackId: number;
  @Column({ name: 'name_zip', default: null })
  nameZip: string;
  @Column({ name: 'date_of_download', default: null })
  dateOfDownload: string;
  @Column({ name: 'is_final_version', default: null })
  isFinalVersion: boolean;
}
