import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productions')
export class Production {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column({ default: null })
  title: string;
  @Column({ default: null })
  videoUrl: string;
  @Column({ default: null })
  dateOfRegistry: string;
}
