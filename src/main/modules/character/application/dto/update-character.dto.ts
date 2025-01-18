import { UpdateDto } from '@/main/modules/common/application/dto/update.dto';

import { Character } from '../../domain/character.entity';

export class UpdateCharacterDto extends UpdateDto<Character> {
  constructor(id: number, character: Omit<Character, 'id'>) {
    super(id, character);
  }
}
