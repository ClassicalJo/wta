import { CreateRitualDto } from '@/main/modules/ritual/application/dto/create-ritual.dto';
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';
import { RITUAL_ENTITY_NAME } from '@/main/modules/ritual/infrastructure/database/ritual.schema';
import { ritualService } from '@/renderer/services/ritual.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeCreateEntityHook } from '../common/makeCreateEntityHook';

export const useCreateRitual = makeCreateEntityHook<Ritual>({
  createDto: CreateRitualDto,
  entityName: RITUAL_ENTITY_NAME,
  entityService: ritualService,
  mainMessage: MainMessages.RITUAL_CREATE_RESPONSE,
});
