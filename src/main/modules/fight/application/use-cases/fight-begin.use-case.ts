import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { processQueue } from '../../domain/worker/fight.queue';
import { IFightRepository } from '../repository/fight-repository.interface';

export class FightBeginUseCase implements IUseCase {
  constructor(
    public readonly messageService: IMessageService,
    public readonly fightRepository: IFightRepository,
  ) {
    this.messageService.onMessage(
      RendererMessages.FIGHT_BEGIN,
      this.execute.bind(this),
    );
  }

  public async execute(id: number): Promise<void> {
    const fightEntity = await this.fightRepository.readOne(id);
    processQueue(fightEntity.times, fightEntity);

    this.messageService.sendMessage(
      MainMessages.FIGHT_BEGIN_RESPONSE,
      'Fight started!',
    );
  }
}
