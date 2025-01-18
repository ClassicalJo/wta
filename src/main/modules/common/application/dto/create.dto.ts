import { IDto } from '../interfaces/dto.interface';
import { IEntity } from '../interfaces/entity.interface';

export class CreateDto<T extends IEntity> implements IDto {
  constructor(data: Partial<T>) {
    Object.assign(this, data);
  }
}
