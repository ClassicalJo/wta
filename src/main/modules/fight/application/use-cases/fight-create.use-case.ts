import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { CreateUseCase } from '@/main/modules/common/application/use-cases/create.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Fight } from '../../domain/fight.entity';
import { CreateFightDto } from '../dto/create-fight.dto';
import { IFightRepository } from '../repository/fight-repository.interface';

export class FightCreateUseCase
  extends CreateUseCase<Fight, CreateFightDto>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly fightRepository: IFightRepository,
  ) {
    super(
      RendererMessages.FIGHT_CREATE,
      MainMessages.FIGHT_CREATE_RESPONSE,
      messageService,
      fightRepository,
    );
  }
}
