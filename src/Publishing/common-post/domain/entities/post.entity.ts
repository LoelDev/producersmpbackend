import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, Length } from 'class-validator';

@Entity('common_posts')
export class CommonPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id', default: null })
  userId: number;

  @IsDefined()
  @Column()
  title: string;
  @Column({ name: 'image_url', default: null })
  imageUrl: string;

  @IsDefined()
  @Length(30)
  @Column()
  description: string;
  @Column({ name: 'date_of_registry', default: null })
  dateOfRegistry: string;
}
