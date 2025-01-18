import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { IBaseRepository } from '../../infrastructure/database/base-repository.interface';
import { IEntity } from '../interfaces/entity.interface';

export class ReadAllUseCase<T extends IEntity> implements IUseCase {
  constructor(
    public readonly onMessage: RendererMessages,
    public readonly emitMessage: MainMessages,
    public readonly messageService: IMessageService,
    public readonly repository: IBaseRepository<T>,
  ) {
    messageService.onMessage(onMessage, this.execute.bind(this));
  }
  public async execute() {
    const entities = await this.repository.readAll();

    this.messageService.sendMessage(this.emitMessage, entities);
  }
}
