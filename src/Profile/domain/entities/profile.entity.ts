import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user_id: number;
  @Column()
  first_name: string;
  @Column()
  last_name: string;
  @Column()
  date_of_birth: string;
  @Column()
  gender: string;
  @Column()
  date_of_registry: string;
  @Column()
  address: string;
  @Column()
  user_type: string;
  @Column()
  image_url: string;
}
