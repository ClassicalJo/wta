import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { ReadUseCase } from '@/main/modules/common/application/use-cases/read.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Fight } from '../../domain/fight.entity';
import { IFightRepository } from '../repository/fight-repository.interface';

export class FightReadUseCase extends ReadUseCase<Fight> implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public repositoryService: IFightRepository,
  ) {
    super(
      RendererMessages.FIGHT_READ,
      MainMessages.FIGHT_READ_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
