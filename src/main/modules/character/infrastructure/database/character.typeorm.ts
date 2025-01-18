import { BaseTypeOrmRepository } from '@/main/modules/common/infrastructure/database/base-repository.typeorm';

import { ICharacterRepository } from '../../application/repository/character-repository.interface';
import { Character } from '../../domain/character.entity';

export class CharacterTypeormRepository
  extends BaseTypeOrmRepository<Character>
  implements ICharacterRepository {}
