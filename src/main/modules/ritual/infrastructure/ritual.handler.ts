import { IEventHandler } from '../../common/application/interfaces/event-handler.interface';
import { IUseCase } from '../../common/application/interfaces/use-case.interface';
import { IMessageService } from '../../message/application/interfaces/message-service.interface';
import { IRitualRepository } from '../application/repository/ritual-repository.interface';
import { RitualCreateUseCase } from '../application/use-cases/ritual-create.use-case';
import { RitualDeleteUseCase } from '../application/use-cases/ritual-delete.use-case';
import { RitualReadAllUseCase } from '../application/use-cases/ritual-read-all.use-case';
import { RitualReadUseCase } from '../application/use-cases/ritual-read.use-case';
import { RitualUpdateUseCase } from '../application/use-cases/ritual-update.use-case';

export class RitualHandler implements IEventHandler {
  useCases: IUseCase[];

  constructor(
    public messageService: IMessageService,
    public ritualRepository: IRitualRepository,
  ) {
    this.useCases = [
      new RitualCreateUseCase(messageService, ritualRepository),
      new RitualReadUseCase(messageService, ritualRepository),
      new RitualUpdateUseCase(messageService, ritualRepository),
      new RitualDeleteUseCase(messageService, ritualRepository),
      new RitualReadAllUseCase(messageService, ritualRepository),
    ];
  }
}
