import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('import_zip_audios')
export class ImportZipAudio {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  trackId: number;
  @Column()
  nameZip: string;
  @Column()
  dateOfDownload: string;
  @Column()
  isFinalVersion: boolean;
}
