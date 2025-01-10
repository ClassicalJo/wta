import { BaseEntity } from '../../common/domain/base.entity';

export class Character extends BaseEntity {
  name?: string;
  strength?: number;
  dexterity?: number;
  stamina?: number;
  charisma?: number;
  manipulation?: number;
  appearance?: number;
  perception?: number;
  intelligence?: number;
  wits?: number;
  constructor(data?: { id?: number; name?: string }) {
    super({ id: data?.id });
    this.name = data?.name;
  }
}
