import { CreateGiftDto } from '@/main/modules/gift/application/dto/create-gift.dto';
import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { GIFT_ENTITY_NAME } from '@/main/modules/gift/infrastructure/database/gift.schema';
import { giftService } from '@/renderer/services/gift.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeCreateEntityHook } from '../common/makeCreateEntityHook';

export const useCreateGift = makeCreateEntityHook<Gift>({
  createDto: CreateGiftDto,
  entityName: GIFT_ENTITY_NAME,
  entityService: giftService,
  mainMessage: MainMessages.GIFT_CREATE_RESPONSE,
});
