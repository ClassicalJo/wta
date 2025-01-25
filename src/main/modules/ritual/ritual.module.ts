import { DataSource } from 'typeorm';

import { IEventHandler } from '../common/application/interfaces/event-handler.interface';
import { IBaseRepository } from '../common/infrastructure/database/base-repository.interface';
import { IMessageService } from '../message/application/interfaces/message-service.interface';
import { Ritual } from './domain/ritual.entity';
import { RitualSchema } from './infrastructure/database/ritual.schema';
import { RitualTypeormRepository } from './infrastructure/database/ritual.typeorm';
import { RitualHandler } from './infrastructure/ritual.handler';

export class RitualModule {
  ritualRepository: IBaseRepository<Ritual>;
  ritualHandler: IEventHandler;
  constructor(
    public datasource: DataSource,
    public messageService: IMessageService,
  ) {
    const ritualRepository = datasource.getRepository(RitualSchema);
    this.ritualRepository = new RitualTypeormRepository(ritualRepository);
    this.ritualHandler = new RitualHandler(
      this.messageService,
      this.ritualRepository,
    );
  }
}
