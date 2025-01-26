import { DataSource } from 'typeorm';

import { IEventHandler } from '../common/application/interfaces/event-handler.interface';
import { IBaseRepository } from '../common/infrastructure/database/base-repository.interface';
import { IMessageService } from '../message/application/interfaces/message-service.interface';
import { Fight } from './domain/fight.entity';
import { FightSchema } from './infrastructure/database/fight.schema';
import { FightTypeormRepository } from './infrastructure/database/fight.typeorm';
import { FightHandler } from './infrastructure/fight.handler';

export class FightModule {
  fightRepository: IBaseRepository<Fight>;
  fightHandler: IEventHandler;
  constructor(
    public datasource: DataSource,
    public messageService: IMessageService,
  ) {
    const fightRepository = datasource.getRepository(FightSchema);
    this.fightRepository = new FightTypeormRepository(fightRepository);
    this.fightHandler = new FightHandler(
      this.messageService,
      this.fightRepository,
    );
  }
}
