import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import { RITUAL_ENTITY_NAME } from '@/main/modules/ritual/infrastructure/database/ritual.schema';
import { ritualService } from '@/renderer/services/ritual.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeUseEntityHook } from '../common/makeUseEntityHook';

export const useRitual = makeUseEntityHook<Ritual>({
  entityName: RITUAL_ENTITY_NAME,
  entityConstructor: Ritual,
  entityService: ritualService,
  onRead: MainMessages.RITUAL_READ_RESPONSE,
  onDelete: MainMessages.RITUAL_DELETE_RESPONSE,
});
