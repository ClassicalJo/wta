import { Fight } from '@/main/modules/fight/domain/fight.entity';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { fightService } from '../../services/fight.service';
import { makeReadAllEntitiesHook } from '../common/makeReadAllEntitiesHook';

export const useReadAllFights = makeReadAllEntitiesHook<Fight>({
  entityService: fightService,
  onResponse: MainMessages.FIGHT_READ_ALL_RESPONSE,
});
