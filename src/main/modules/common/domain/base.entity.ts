import { IEntity } from '../application/interfaces/entity.interface';

export class BaseEntity implements IEntity {
  id?: number;
  constructor(data?: { id?: number }) {
    this.id = data?.id;
  }
}
