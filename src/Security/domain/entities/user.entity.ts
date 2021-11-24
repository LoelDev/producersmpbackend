import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsDefined, IsEmail, IsString, Length } from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  @IsDefined()
  username: string;

  @IsEmail()
  @IsDefined()
  @Column()
  email: string;

  @Column()
  @IsString()
  @IsDefined()
  @Length(8)
  password: string;
}
