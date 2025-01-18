import { IBaseRepository } from '@/main/modules/common/infrastructure/database/base-repository.interface';

import { Character } from '../../domain/character.entity';

export type ICharacterRepository = IBaseRepository<Character>;
