import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { UserService } from '../../domain/services/user.service';
import { User } from '../../domain/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const user = await this.userService.findOne(id);
    return response.status(HttpStatus.OK).json({ user });
  }

  @Get()
  async findAll(@Res() response) {
    const users = await this.userService.findAll();
    return response.status(HttpStatus.OK).json({ users });
  }

  @Post()
  async createUser(@Res() response, @Body() user: User) {
    const newUser = await this.userService.createUser(user);
    return response.status(HttpStatus.CREATED).json({ newUser });
  }

  @Put('/:id')
  async updateById(@Res() response, @Body() user: User, @Param('id') id) {
    const updateResult = await this.userService.updateUser(id, user);
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeProfile(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }
}
