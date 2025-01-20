import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { CreateUseCase } from '@/main/modules/common/application/use-cases/create.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Gift } from '../../domain/gift.entity';
import { CreateGiftDto } from '../dto/create-gift.dto';
import { IGiftRepository } from '../repository/gift-repository.interface';

export class GiftCreateUseCase
  extends CreateUseCase<Gift, CreateGiftDto>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly giftRepository: IGiftRepository,
  ) {
    super(
      RendererMessages.GIFT_CREATE,
      MainMessages.GIFT_CREATE_RESPONSE,
      messageService,
      giftRepository,
    );
  }
}
