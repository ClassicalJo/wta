import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { ReadAllUseCase } from '@/main/modules/common/application/use-cases/read-all.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Ritual } from '../../domain/ritual.entity';
import { IRitualRepository } from '../repository/ritual-repository.interface';

export class RitualReadAllUseCase
  extends ReadAllUseCase<Ritual>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly ritualRepository: IRitualRepository,
  ) {
    super(
      RendererMessages.RITUAL_READ_ALL,
      MainMessages.RITUAL_READ_ALL_RESPONSE,
      messageService,
      ritualRepository,
    );
  }
}
