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
import { ProfileService } from '../Services/profile.service';
import { Profile } from '../Entities/profile.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profiles')
@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const profile = await this.profileService.findOne(id);
    return response.status(HttpStatus.OK).json({ profile });
  }

  @Get()
  async findAll(@Res() response) {
    const profiles = await this.profileService.findAll();
    return response.status(HttpStatus.OK).json({ profiles });
  }

  @Post()
  async creatProfile(@Res() response, @Body() profile: Profile) {
    const newProfile = await this.profileService.createProfile(profile);
    return response.status(HttpStatus.CREATED).json({ newProfile });
  }

  @Put('/:id')
  async updateById(@Res() response, @Body() profile: Profile, @Param('id') id) {
    const updateResult = await this.profileService.updateProfile(id, profile);
    return response.status(HttpStatus.CREATED).json({ updateResult });
  }

  @Delete('/:id')
  removeProfile(@Param('id') id: string) {
    return this.profileService.removeProfile(id);
  }
}
