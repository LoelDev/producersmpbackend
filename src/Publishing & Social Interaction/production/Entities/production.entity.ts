import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productions')
export class Production {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column({ default: null })
  title: string;
  @Column({ default: null })
  video_url: string;
  @Column({ default: null })
  date_of_registry: string;
}
