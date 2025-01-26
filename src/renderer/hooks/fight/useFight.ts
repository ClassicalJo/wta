import { Fight } from '@/main/modules/fight/domain/fight.entity';
import { FIGHT_ENTITY_NAME } from '@/main/modules/fight/infrastructure/database/fight.schema';
import { fightService } from '@/renderer/services/fight.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeUseEntityHook } from '../common/makeUseEntityHook';

export const useFight = makeUseEntityHook<Fight>({
  entityName: FIGHT_ENTITY_NAME,
  entityConstructor: Fight,
  entityService: fightService,
  onRead: MainMessages.FIGHT_READ_RESPONSE,
  onDelete: MainMessages.FIGHT_DELETE_RESPONSE,
});
