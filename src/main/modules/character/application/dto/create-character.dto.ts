import { CreateDto } from '@/main/modules/common/application/dto/create.dto';

import { Character } from '../../domain/character.entity';

export class CreateCharacterDto extends CreateDto<Character> {
  constructor(character: Omit<Character, 'id'>) {
    super(character);
  }
}
