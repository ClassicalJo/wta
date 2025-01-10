import { Character } from '../../domain/character.entity';

export class UpdateCharacterDto implements Partial<Character> {
  id: number;
  character: Omit<Character, 'id'>;
  constructor(id: number, character: Omit<Character, 'id'>) {
    this.id = id;
    this.character = character;
  }
}
