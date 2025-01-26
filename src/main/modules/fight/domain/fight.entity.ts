import { Character } from '../../character/domain/character.entity';
import { BaseEntity } from '../../common/domain/base.entity';

export class Fight extends BaseEntity {
  name?: string;
  description?: string;
  groupA?: Character[];
  groupB?: Character[];
  times?: number;

  constructor(data?: {
    id?: number;
    name?: string;
    description?: string;
    groupA?: Character[];
    groupB?: Character[];
    times?: number;
  }) {
    super({ id: data?.id });
    this.name = data?.name;
    this.description = data?.description;
    this.groupA = data?.groupA;
    this.groupB = data?.groupB;
    this.times = data?.times;
  }
}
