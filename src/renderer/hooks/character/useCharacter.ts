import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { UpdateCharacterDto } from '@/main/modules/character/application/dto/update-character.dto';
import { Character } from '@/main/modules/character/domain/character.entity';
import { characterService } from '@/renderer/services/character.service';
import { notificationService } from '@/renderer/services/notification.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

export default function useCharacter(id: number) {
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character>(new Character());
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);

  const fetchCharacter = useCallback(() => {
    characterService.read(id);
  }, [id]);

  const updateCharacter = useCallback(
    (propertyName: keyof Character, propertyValue: string) => {
      const updateCharacterDto = new UpdateCharacterDto({
        ...character,
        [propertyName]: propertyValue,
      });

      setCharacter({ ...character, [propertyName]: propertyValue });

      characterService.update(updateCharacterDto);
    },
    [character, setCharacter],
  );

  const deleteCharacter = useCallback(() => {
    if (!confirmDelete) {
      setConfirmDelete(true);
    } else {
      characterService.delete(id);
    }
  }, [id, confirmDelete, setConfirmDelete]);

  const cancelDeleteCharacter = useCallback(() => {
    setConfirmDelete(false);
  }, []);

  const handleReadCharacterResponse = useCallback(
    (character: Character) => {
      setCharacter(character);
    },
    [setCharacter],
  );

  const handleUpdateCharacterResponse = useCallback(() => {
    notificationService.success('Character updated');
  }, []);

  const handleDeleteCharacterResponse = useCallback(() => {
    notificationService.success('Character deleted');
    navigate('/characters');
  }, [navigate]);

  useEffect(() => {
    fetchCharacter();

    const readCallback = window.electron.onMainMessage(
      MainMessages.CHARACTER_READ_RESPONSE,
      handleReadCharacterResponse,
    );

    const updateCallback = window.electron.onMainMessage(
      MainMessages.CHARACTER_UPDATE_RESPONSE,
      handleUpdateCharacterResponse,
    );

    const deleteCallback = window.electron.onMainMessage(
      MainMessages.CHARACTER_DELETE_RESPONSE,
      handleDeleteCharacterResponse,
    );

    return () => {
      window.electron.offMainMessage(
        MainMessages.CHARACTER_READ_RESPONSE,
        readCallback,
      );

      window.electron.offMainMessage(
        MainMessages.CHARACTER_UPDATE_RESPONSE,
        updateCallback,
      );

      window.electron.offMainMessage(
        MainMessages.CHARACTER_DELETE_RESPONSE,
        deleteCallback,
      );
    };
  }, [
    id,
    fetchCharacter,
    handleReadCharacterResponse,
    handleUpdateCharacterResponse,
    handleDeleteCharacterResponse,
  ]);

  return {
    character,
    updateCharacter,
    deleteCharacter,
    cancelDeleteCharacter,
    confirmDelete,
  };
}
