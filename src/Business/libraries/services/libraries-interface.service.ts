import { Library } from '../domain/entities/library.entity';
import { DeleteResult } from 'typeorm';

export interface LibrariesInterfaceService {
  findAll(): Promise<Library[]>;
  findOne(id: string): Promise<Library>;
  createLibrary(library: Library): Promise<Library>;
  updateLibrary(id: string, library: Library): Promise<Library>;
  removeLibrary(id: string): Promise<DeleteResult>;
}
