import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { MainMessages } from '@/shared/messages/main-messages.enum';

import { giftService } from '../../services/gift.service';
import { makeReadAllEntitiesHook } from '../common/makeReadAllEntitiesHook';

export const useReadAllGifts = makeReadAllEntitiesHook<Gift>({
  entityService: giftService,
  onResponse: MainMessages.GIFT_READ_ALL_RESPONSE,
});
