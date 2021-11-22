import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Library } from '../entities/library.entity';

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private libraryRepository: Repository<Library>,
  ) {}

  findAll(): Promise<Library[]> {
    return this.libraryRepository.find();
  }

  findOne(id: string): Promise<Library> {
    return this.libraryRepository.findOne(id);
  }

  createLibrary(library: Library): Promise<Library> {
    return this.libraryRepository.save(library);
  }

  async updateLibrary(id: string, library: Library): Promise<Library> {
    const todo = await this.libraryRepository.findOne(id);
    if (!todo == null) {
      return null;
    }
    await this.libraryRepository.update(id, library);
    return await this.libraryRepository.findOne(id);
  }

  async removeLibrary(id: string): Promise<DeleteResult> {
    await this.libraryRepository.findOneOrFail(id);
    return await this.libraryRepository.delete(id);
  }
}
