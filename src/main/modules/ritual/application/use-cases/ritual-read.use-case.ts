import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { ReadUseCase } from '@/main/modules/common/application/use-cases/read.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Ritual } from '../../domain/ritual.entity';
import { IRitualRepository } from '../repository/ritual-repository.interface';

export class RitualReadUseCase extends ReadUseCase<Ritual> implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public repositoryService: IRitualRepository,
  ) {
    super(
      RendererMessages.RITUAL_READ,
      MainMessages.RITUAL_READ_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
