import { IEventHandler } from '../../common/application/interfaces/event-handler.interface';
import { IUseCase } from '../../common/application/interfaces/use-case.interface';
import { IMessageService } from '../../message/application/interfaces/message-service.interface';
import { IGiftRepository } from '../application/repository/gift-repository.interface';
import { GiftCreateUseCase } from '../application/use-cases/gift-create.use-case';
import { GiftDeleteUseCase } from '../application/use-cases/gift-delete.use-case';
import { GiftReadAllUseCase } from '../application/use-cases/gift-read-all.use-case';
import { GiftReadUseCase } from '../application/use-cases/gift-read.use-case';
import { GiftUpdateUseCase } from '../application/use-cases/gift-update.use-case';

export class GiftHandler implements IEventHandler {
  useCases: IUseCase[];

  constructor(
    public messageService: IMessageService,
    public giftRepository: IGiftRepository,
  ) {
    this.useCases = [
      new GiftCreateUseCase(messageService, giftRepository),
      new GiftReadUseCase(messageService, giftRepository),
      new GiftUpdateUseCase(messageService, giftRepository),
      new GiftDeleteUseCase(messageService, giftRepository),
      new GiftReadAllUseCase(messageService, giftRepository),
    ];
  }
}
