import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { UpdateUseCase } from '@/main/modules/common/application/use-cases/update.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Ritual } from '../../domain/ritual.entity';
import { UpdateRitualDto } from '../dto/update-ritual.dto';
import { IRitualRepository } from '../repository/ritual-repository.interface';

export class RitualUpdateUseCase
  extends UpdateUseCase<Ritual, UpdateRitualDto>
  implements IUseCase
{
  constructor(
    public messageService: IMessageService,
    public repositoryService: IRitualRepository,
  ) {
    super(
      RendererMessages.RITUAL_UPDATE,
      MainMessages.RITUAL_UPDATE_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
