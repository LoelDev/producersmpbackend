import { Module } from '@nestjs/common';
import { LibraryController } from '../api/controllers/library.controller';
import { LibraryService } from '../domain/services/library.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Library } from '../domain/entities/library.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Library])],
  controllers: [LibraryController],
  providers: [LibraryService],
})
export class LibraryModule {}
