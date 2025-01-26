import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { UpdateUseCase } from '@/main/modules/common/application/use-cases/update.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Fight } from '../../domain/fight.entity';
import { UpdateFightDto } from '../dto/update-fight.dto';
import { IFightRepository } from '../repository/fight-repository.interface';

export class FightUpdateUseCase
  extends UpdateUseCase<Fight, UpdateFightDto>
  implements IUseCase
{
  constructor(
    public messageService: IMessageService,
    public repositoryService: IFightRepository,
  ) {
    super(
      RendererMessages.FIGHT_UPDATE,
      MainMessages.FIGHT_UPDATE_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
