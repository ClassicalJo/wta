import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { ReadAllUseCase } from '@/main/modules/common/application/use-cases/read-all.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Fight } from '../../domain/fight.entity';
import { IFightRepository } from '../repository/fight-repository.interface';

export class FightReadAllUseCase
  extends ReadAllUseCase<Fight>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly fightRepository: IFightRepository,
  ) {
    super(
      RendererMessages.FIGHT_READ_ALL,
      MainMessages.FIGHT_READ_ALL_RESPONSE,
      messageService,
      fightRepository,
    );
  }
}
