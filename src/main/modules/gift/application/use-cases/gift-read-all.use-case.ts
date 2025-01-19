import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { ReadAllUseCase } from '@/main/modules/common/application/use-cases/read-all.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Gift } from '../../domain/gift.entity';
import { IGiftRepository } from '../repository/gift-repository.interface';

export class GiftReadAllUseCase
  extends ReadAllUseCase<Gift>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly giftRepository: IGiftRepository,
  ) {
    super(
      RendererMessages.GIFT_READ_ALL,
      MainMessages.GIFT_READ_ALL_RESPONSE,
      messageService,
      giftRepository,
    );
  }
}
