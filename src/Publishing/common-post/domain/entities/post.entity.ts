import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_posts')
export class CommonPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id' })
  userId: number;
  @Column()
  title: string;
  @Column({ name: 'image_url' })
  imageUrl: string;
  @Column()
  description: string;
  @Column({ name: 'date_of_registry' })
  dateOfRegistry: string;
}
