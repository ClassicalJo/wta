import { IEventHandler } from '../../common/application/interfaces/event-handler.interface';
import { IUseCase } from '../../common/application/interfaces/use-case.interface';
import { IMessageService } from '../../message/application/interfaces/message-service.interface';
import { IFightRepository } from '../application/repository/fight-repository.interface';
import { FightBeginUseCase } from '../application/use-cases/fight-begin.use-case';
import { FightCreateUseCase } from '../application/use-cases/fight-create.use-case';
import { FightDeleteUseCase } from '../application/use-cases/fight-delete.use-case';
import { FightReadAllUseCase } from '../application/use-cases/fight-read-all.use-case';
import { FightReadUseCase } from '../application/use-cases/fight-read.use-case';
import { FightUpdateUseCase } from '../application/use-cases/fight-update.use-case';

export class FightHandler implements IEventHandler {
  useCases: IUseCase[];

  constructor(
    public messageService: IMessageService,
    public fightRepository: IFightRepository,
  ) {
    this.useCases = [
      new FightCreateUseCase(messageService, fightRepository),
      new FightReadUseCase(messageService, fightRepository),
      new FightUpdateUseCase(messageService, fightRepository),
      new FightDeleteUseCase(messageService, fightRepository),
      new FightReadAllUseCase(messageService, fightRepository),
      new FightBeginUseCase(messageService, fightRepository),
    ];
  }
}
