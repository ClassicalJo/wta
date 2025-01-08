import { Character } from '../../domain/character.entity';

export class UpdateCharacterDto implements Partial<Character> {
  id: number;
  name?: string;
  constructor(character: Partial<Character> & { id: number }) {
    this.id = character.id;
    this.name = character.name;
  }
}
