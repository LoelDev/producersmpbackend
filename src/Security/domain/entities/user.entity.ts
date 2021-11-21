import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: null })
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
}
