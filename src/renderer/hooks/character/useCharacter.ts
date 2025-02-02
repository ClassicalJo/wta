import { Character } from '@/main/modules/character/domain/character.entity';
import { characterService } from '@/renderer/services/character.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeUseEntityHook } from '../common/makeUseEntityHook';

export const useCharacter = makeUseEntityHook({
  entityName: 'Character',
  entityService: characterService,
  entityConstructor: Character,
  onRead: MainMessages.CHARACTER_READ_RESPONSE,
  onUpdate: MainMessages.CHARACTER_UPDATE_RESPONSE,
  onDelete: MainMessages.CHARACTER_DELETE_RESPONSE,
});
