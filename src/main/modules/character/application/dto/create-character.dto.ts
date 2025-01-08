import { Character } from '../../domain/character.entity';

export class CreateCharacterDto implements Omit<Character, 'id'> {
  name: string;
  constructor(character: Omit<Character, 'id'>) {
    this.name = character.name;
  }
}
