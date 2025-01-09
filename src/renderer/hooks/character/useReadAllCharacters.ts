import { useCallback, useEffect, useState } from 'react';

import { Character } from '@/main/modules/character/domain/character.entity';
import { characterService } from '@/renderer/services/character.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

export function useReadAllCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const fetchCharacters = useCallback(() => {
    characterService.readAll();
  }, []);

  useEffect(() => {
    fetchCharacters();

    const callback = window.electron.onMainMessage(
      MainMessages.CHARACTER_READ_ALL_RESPONSE,
      (characters: Character[]) => setCharacters(characters),
    );

    return () =>
      window.electron.offMainMessage(
        MainMessages.CHARACTER_READ_ALL_RESPONSE,
        callback,
      );
  }, [fetchCharacters]);

  return { characters, fetchCharacters };
}
