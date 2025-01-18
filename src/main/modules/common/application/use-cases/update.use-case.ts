import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { IBaseRepository } from '../../infrastructure/database/base-repository.interface';
import { UpdateDto } from '../dto/update.dto';
import { IEntity } from '../interfaces/entity.interface';

export class UpdateUseCase<T extends IEntity, K extends UpdateDto<T>>
  implements IUseCase
{
  constructor(
    public readonly onMessage: RendererMessages,
    public readonly emitMessage: MainMessages,
    public readonly messageService: IMessageService,
    public readonly repository: IBaseRepository<T>,
  ) {
    messageService.onMessage(onMessage, this.execute.bind(this));
  }
  public async execute(dto: K) {
    const dbEntity = await this.repository.readOne(dto.id);

    if (!dbEntity) throw new NotFoundException(dto.id);

    const entity = { ...dbEntity, ...dto.data };

    const updatedEntity = await this.repository.updateOne(entity);

    this.messageService.sendMessage(this.emitMessage, updatedEntity);
  }
}
