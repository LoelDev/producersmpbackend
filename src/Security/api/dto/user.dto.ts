import { IsDefined, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsDefined()
  username: string;

  @IsString()
  @IsEmail()
  @IsDefined()
  email: string;

  @IsDefined()
  password: string;
}
