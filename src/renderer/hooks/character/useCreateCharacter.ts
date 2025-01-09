import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { CreateCharacterDto } from '@/main/modules/character/application/dto/create-character.dto';
import { characterService } from '@/renderer/services/character.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { notificationService } from '../../services/notification.service';

export function useCreateCharacter() {
  const navigator = useNavigate();
  const onSubmit = useCallback(
    (values: Record<keyof CreateCharacterDto, string>) => {
      const createCharacterDto = new CreateCharacterDto(values);
      characterService.create(createCharacterDto);
    },
    [],
  );

  const onCreateSuccess = useCallback(() => {
    notificationService.success('Character created');
    navigator('/characters');
  }, [navigator]);

  useEffect(() => {
    const callback = window.electron.onMainMessage(
      MainMessages.CHARACTER_CREATE_RESPONSE,
      onCreateSuccess,
    );

    return () =>
      window.electron.offMainMessage(
        MainMessages.CHARACTER_CREATE_RESPONSE,
        callback,
      );
  }, [onCreateSuccess]);
  return { onSubmit };
}
