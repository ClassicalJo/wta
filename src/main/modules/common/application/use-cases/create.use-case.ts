import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { DtoMapper } from '@/main/modules/common/application/mapper/dto.mapper';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { IBaseRepository } from '../../infrastructure/database/base-repository.interface';
import { CreateDto } from '../dto/create.dto';
import { IEntity } from '../interfaces/entity.interface';

export class CreateUseCase<T extends IEntity, K extends CreateDto<T>>
  implements IUseCase
{
  constructor(
    public readonly onMessage: RendererMessages,
    public readonly emitMessage: MainMessages,
    public readonly messageService: IMessageService,
    public readonly repository: IBaseRepository<T>,
  ) {
    this.messageService.onMessage(onMessage, this.execute.bind(this));
  }
  public async execute(dto: K): Promise<void> {
    const entity = DtoMapper.toEntity<T>(dto);
    const createdEntity = await this.repository.createOne(entity);
    this.messageService.sendMessage(this.emitMessage, createdEntity);
  }
}
