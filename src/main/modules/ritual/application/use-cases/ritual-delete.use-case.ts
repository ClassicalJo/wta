import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { DeleteUseCase } from '@/main/modules/common/application/use-cases/delete.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Ritual } from '../../domain/ritual.entity';
import { IRitualRepository } from '../repository/ritual-repository.interface';

export class RitualDeleteUseCase
  extends DeleteUseCase<Ritual>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly ritualRepository: IRitualRepository,
  ) {
    super(
      RendererMessages.RITUAL_DELETE,
      MainMessages.RITUAL_DELETE_RESPONSE,
      messageService,
      ritualRepository,
    );
  }
}
