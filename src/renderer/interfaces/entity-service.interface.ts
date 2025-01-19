import { CreateDto } from '@/main/modules/common/application/dto/create.dto';
import { UpdateDto } from '@/main/modules/common/application/dto/update.dto';
import { IEntity } from '@/main/modules/common/application/interfaces/entity.interface';

export interface IEntityService<T extends IEntity> {
  create(createDto: CreateDto<T>): void;
  update(giftDto: UpdateDto<T>): void;
  read(id: number): void;
  readAll(): void;
  delete(id: number): void;
}
