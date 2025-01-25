import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { CreateUseCase } from '@/main/modules/common/application/use-cases/create.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Ritual } from '../../domain/ritual.entity';
import { CreateRitualDto } from '../dto/create-ritual.dto';
import { IRitualRepository } from '../repository/ritual-repository.interface';

export class RitualCreateUseCase
  extends CreateUseCase<Ritual, CreateRitualDto>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly ritualRepository: IRitualRepository,
  ) {
    super(
      RendererMessages.RITUAL_CREATE,
      MainMessages.RITUAL_CREATE_RESPONSE,
      messageService,
      ritualRepository,
    );
  }
}
