import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productions')
export class Production {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  title: string;
  @Column({ name: 'video_url' })
  videoUrl: string;
  @Column({ name: 'date_of_registry' })
  dateOfRegistry: string;
}
