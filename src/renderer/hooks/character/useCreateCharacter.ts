import { CreateCharacterDto } from '@/main/modules/character/application/dto/create-character.dto';
import { Character } from '@/main/modules/character/domain/character.entity';
import { CHARACTER_ENTITY_NAME } from '@/main/modules/character/infrastructure/database/character.schema';
import { characterService } from '@/renderer/services/character.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeCreateEntityHook } from '../common/makeCreateEntityHook';

export const useCreateCharacter = makeCreateEntityHook<Character>({
  createDto: CreateCharacterDto,
  entityName: CHARACTER_ENTITY_NAME,
  entityService: characterService,
  mainMessage: MainMessages.CHARACTER_CREATE_RESPONSE,
});
