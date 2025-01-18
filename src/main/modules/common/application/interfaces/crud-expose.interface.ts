import { CreateDto } from '../dto/create.dto';
import { UpdateDto } from '../dto/update.dto';

export interface ICrudExpose<T> {
  read: (id: number) => void;
  readAll: () => void;
  update: (entity: UpdateDto<T>) => void;
  create: (entity: CreateDto<T>) => void;
  delete: (id: number) => void;
}
