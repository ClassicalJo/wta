import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { DeleteUseCase } from '@/main/modules/common/application/use-cases/delete.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Fight } from '../../domain/fight.entity';
import { IFightRepository } from '../repository/fight-repository.interface';

export class FightDeleteUseCase
  extends DeleteUseCase<Fight>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly fightRepository: IFightRepository,
  ) {
    super(
      RendererMessages.FIGHT_DELETE,
      MainMessages.FIGHT_DELETE_RESPONSE,
      messageService,
      fightRepository,
    );
  }
}
