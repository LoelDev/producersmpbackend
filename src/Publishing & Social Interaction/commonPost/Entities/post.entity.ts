import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_posts')
export class CPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column({ default: null })
  description: string;
  @Column({ default: null })
  date_of_registry: string;
}
