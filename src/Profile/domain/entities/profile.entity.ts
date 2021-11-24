import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, IsString } from 'class-validator';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'user_id', default: null })
  userId: number;
  @IsString()
  @IsDefined()
  @Column({ name: 'first_name', default: null })
  firstName: string;
  @IsString()
  @IsDefined()
  @Column({ name: 'last_name', default: null })
  lastName: string;
  @Column({ name: 'date_of_birth', default: null })
  dateOfBirth: string;
  @Column({ default: null })
  gender: string;
  @Column({ name: 'date_of_registry', default: null })
  dateOfRegistry: string;
  @Column({ default: null })
  address: string;
  @IsDefined()
  @Column({ name: 'user_type', default: null })
  userType: string;
  @Column({ name: 'image_url', default: null })
  imageUrl: string;
}
