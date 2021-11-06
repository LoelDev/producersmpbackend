import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ProfileService } from '../Services/profile.service';
import { Profile } from '../Entities/profile.entity';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async creatProfile(@Res() response, @Body() profile: Profile) {
    const newProfile = await this.profileService.createProfile(profile);
    return response.status(HttpStatus.CREATED).json({ newProfile });
  }

  @Get('/:id')
  async findById(@Res() response, @Param('id') id) {
    const profile = await this.profileService.findOne(id);
    return response.status(HttpStatus.OK).json({ profile });
  }
}
