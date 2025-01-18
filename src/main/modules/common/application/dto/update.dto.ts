import { IDto } from '../interfaces/dto.interface';
import { IEntity } from '../interfaces/entity.interface';

export class UpdateDto<T extends IEntity> implements IDto {
  constructor(
    public readonly id: number,
    public readonly data: Partial<T>,
  ) {}
}
