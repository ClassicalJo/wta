import { characterService } from '@/renderer/services/character.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeReadAllEntitiesHook } from '../common/makeReadAllEntitiesHook';

export const useReadAllCharacters = makeReadAllEntitiesHook({
  entityService: characterService,
  onResponse: MainMessages.CHARACTER_READ_ALL_RESPONSE,
});
