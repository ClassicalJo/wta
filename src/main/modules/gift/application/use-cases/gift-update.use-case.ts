import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { UpdateUseCase } from '@/main/modules/common/application/use-cases/update.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Gift } from '../../domain/gift.entity';
import { UpdateGiftDto } from '../dto/update-gift.dto';
import { IGiftRepository } from '../repository/gift-repository.interface';

export class GiftUpdateUseCase
  extends UpdateUseCase<Gift, UpdateGiftDto>
  implements IUseCase
{
  constructor(
    public messageService: IMessageService,
    public repositoryService: IGiftRepository,
  ) {
    super(
      RendererMessages.GIFT_UPDATE,
      MainMessages.GIFT_UPDATE_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
