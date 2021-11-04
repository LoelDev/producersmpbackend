import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Res() response, @Body() user: User) {
    const newUser = await this.userService.createUser(user);
    return response.status(HttpStatus.CREATED).json({ newUser });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const user = await this.userService.findOne(id);
    return response.status(HttpStatus.OK).json({ user });
  }
}
