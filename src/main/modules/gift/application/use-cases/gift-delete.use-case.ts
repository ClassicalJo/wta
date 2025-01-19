import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { DeleteUseCase } from '@/main/modules/common/application/use-cases/delete.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Gift } from '../../domain/gift.entity';
import { IGiftRepository } from '../repository/gift-repository.interface';

export class GiftDeleteUseCase extends DeleteUseCase<Gift> implements IUseCase {
  constructor(
    public readonly messageService: IMessageService,
    public readonly giftRepository: IGiftRepository,
  ) {
    super(
      RendererMessages.GIFT_DELETE,
      MainMessages.GIFT_DELETE_RESPONSE,
      messageService,
      giftRepository,
    );
  }
}
