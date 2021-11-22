import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id' })
  userId: number;
  @Column({ name: 'first_name' })
  firstName: string;
  @Column({ name: 'last_name' })
  lastName: string;
  @Column({ name: 'date_of_birth' })
  dateOfBirth: string;
  @Column()
  gender: string;
  @Column({ name: 'date_of_registry' })
  dateOfRegistry: string;
  @Column()
  address: string;
  @Column({ name: 'user_type' })
  userType: string;
  @Column({ name: 'image_url' })
  imageUrl: string;
}
