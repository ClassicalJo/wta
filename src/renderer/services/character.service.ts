import { Character } from '@/main/modules/character/domain/character.entity';

class CharacterService {
  create(character: Omit<Character, 'id'>) {
    window.electron.db.character.create(character);
  }

  update(character: Character) {
    window.electron.db.character.update(character);
  }

  read(id: number) {
    window.electron.db.character.read(id);
  }

  delete(id: number) {
    window.electron.db.character.delete(id);
  }
}

export const characterService = new CharacterService();
