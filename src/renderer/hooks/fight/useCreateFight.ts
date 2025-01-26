import { CreateFightDto } from '@/main/modules/fight/application/dto/create-fight.dto';
import { Fight } from '@/main/modules/fight/domain/fight.entity';
import { FIGHT_ENTITY_NAME } from '@/main/modules/fight/infrastructure/database/fight.schema';
import { fightService } from '@/renderer/services/fight.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeCreateEntityHook } from '../common/makeCreateEntityHook';

export const useCreateFight = makeCreateEntityHook<Fight>({
  createDto: CreateFightDto,
  entityName: FIGHT_ENTITY_NAME,
  entityService: fightService,
  mainMessage: MainMessages.FIGHT_CREATE_RESPONSE,
});
