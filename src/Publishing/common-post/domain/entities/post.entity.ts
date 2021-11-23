import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_posts')
export class CommonPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id', default: null })
  userId: number;
  @Column()
  title: string;
  @Column({ name: 'image_url', default: null })
  imageUrl: string;
  @Column()
  description: string;
  @Column({ name: 'date_of_registry', default: null })
  dateOfRegistry: string;
}
