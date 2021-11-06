import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from '../Entities/profile.entity';
import { ProfileService } from '../Services/profile.service';
import { ProfileController } from '../Controllers/profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Profile])],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}
