import { Character } from '../../character/domain/character.entity';
import { BaseEntity } from '../../common/domain/base.entity';

export class Background extends BaseEntity {
  name?: string;
  description?: string;
  level?: number;
  character?: Character;
  constructor(data: Background) {
    super({ id: data?.id });
    this.name = data?.name;
    this.description = data?.description;
    this.level = data?.level;
    this.character = data?.character;
  }
}
