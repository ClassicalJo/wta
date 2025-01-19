import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { ReadUseCase } from '@/main/modules/common/application/use-cases/read.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Gift } from '../../domain/gift.entity';
import { IGiftRepository } from '../repository/gift-repository.interface';

export class GiftReadUseCase extends ReadUseCase<Gift> implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public repositoryService: IGiftRepository,
  ) {
    super(
      RendererMessages.GIFT_READ,
      MainMessages.GIFT_READ_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
