import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userId: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  dateOfBirth: string;
  @Column()
  gender: string;
  @Column()
  dateOfRegistry: string;
  @Column()
  address: string;
  @Column()
  userType: string;
  @Column()
  imageUrl: string;
}
