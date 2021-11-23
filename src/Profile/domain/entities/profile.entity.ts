import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id', default: null })
  userId: number;
  @Column({ name: 'first_name', default: null })
  firstName: string;
  @Column({ name: 'last_name', default: null })
  lastName: string;
  @Column({ name: 'date_of_birth', default: null })
  dateOfBirth: string;
  @Column()
  gender: string;
  @Column({ name: 'date_of_registry', default: null })
  dateOfRegistry: string;
  @Column()
  address: string;
  @Column({ name: 'user_type', default: null })
  userType: string;
  @Column({ name: 'image_url', default: null })
  imageUrl: string;
}
