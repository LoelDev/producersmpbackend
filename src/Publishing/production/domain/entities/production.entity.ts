import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productions')
export class Production {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id', default: null })
  userId: number;
  @Column()
  title: string;
  @Column({ name: 'video_url', default: null })
  videoUrl: string;
  @Column({ name: 'date_of_registry', default: null })
  dateOfRegistry: string;
}
