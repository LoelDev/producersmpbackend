import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('common_posts')
export class CommonPost {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userid: number;
  @Column({ default: null })
  title: string;
  @Column({ default: null })
  imageUrl: string;
  @Column({ default: null })
  description: string;
  @Column({ default: null })
  dateOfRegistry: string;
}
