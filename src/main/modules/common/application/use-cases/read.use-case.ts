import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { IBaseRepository } from '../../infrastructure/database/base-repository.interface';
import { IEntity } from '../interfaces/entity.interface';

export class ReadUseCase<T extends IEntity> implements IUseCase {
  constructor(
    public readonly onMessage: RendererMessages,
    public readonly emitMessage: MainMessages,
    public readonly messageService: IMessageService,
    public readonly repository: IBaseRepository<T>,
  ) {
    messageService.onMessage(onMessage, this.execute.bind(this));
  }
  public async execute(id: number) {
    const dbEntity = await this.repository.readOne(id);

    if (!dbEntity) throw new NotFoundException(id);

    this.messageService.sendMessage(this.emitMessage, dbEntity);
  }
}
