import { IEntity } from '../../common/application/interfaces/entity.interface';

export class Character implements IEntity {
  id: number;
  name: string;
  constructor(data?: { id?: number; name?: string }) {
    this.id = data?.id;
    this.name = data?.name;
  }
}
