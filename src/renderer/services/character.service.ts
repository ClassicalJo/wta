import { CreateCharacterDto } from '@/main/modules/character/application/dto/create-character.dto';
import { UpdateCharacterDto } from '@/main/modules/character/application/dto/update-character.dto';

class CharacterService {
  create(characterDto: CreateCharacterDto) {
    window.electron.db.character.create(characterDto);
  }

  update(characterDto: UpdateCharacterDto) {
    window.electron.db.character.update(characterDto);
  }

  read(id: number) {
    window.electron.db.character.read(id);
  }

  readAll() {
    window.electron.db.character.readAll();
  }

  delete(id: number) {
    window.electron.db.character.delete(id);
  }
}

export const characterService = new CharacterService();
