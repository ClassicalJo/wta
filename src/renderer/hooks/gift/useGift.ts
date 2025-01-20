import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { GIFT_ENTITY_NAME } from '@/main/modules/gift/infrastructure/database/gift.schema';
import { giftService } from '@/renderer/services/gift.service';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { makeUseEntityHook } from '../common/makeUseEntityHook';

export const useGift = makeUseEntityHook<Gift>({
  entityName: GIFT_ENTITY_NAME,
  entityConstructor: Gift,
  entityService: giftService,
  onRead: MainMessages.GIFT_READ_RESPONSE,
  onDelete: MainMessages.GIFT_DELETE_RESPONSE,
});
