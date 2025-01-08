import { instanceToPlain } from 'class-transformer';

import { IDto } from '../interfaces/dto.interface';
import { IEntity } from '../interfaces/entity.interface';

export class DtoMapper {
  static toEntity<T extends IEntity>(dto: IDto): T {
    return instanceToPlain(dto, { excludeExtraneousValues: true }) as T;
  }
}
