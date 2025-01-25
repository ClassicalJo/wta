import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { ritualService } from '../../services/ritual.service';
import { makeReadAllEntitiesHook } from '../common/makeReadAllEntitiesHook';

export const useReadAllRituals = makeReadAllEntitiesHook<Ritual>({
  entityService: ritualService,
  onResponse: MainMessages.RITUAL_READ_ALL_RESPONSE,
});
