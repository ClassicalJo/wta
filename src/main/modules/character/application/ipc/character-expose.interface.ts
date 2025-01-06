import { ICrudExpose } from '@/main/modules/common/application/interfaces/crud-expose.interface';

import { Character } from '../../domain/character.entity';

export type ICharacterExpose = ICrudExpose<Character>;
