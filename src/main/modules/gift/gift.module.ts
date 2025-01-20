import { DataSource } from 'typeorm';

import { IEventHandler } from '../common/application/interfaces/event-handler.interface';
import { IBaseRepository } from '../common/infrastructure/database/base-repository.interface';
import { IMessageService } from '../message/application/interfaces/message-service.interface';
import { Gift } from './domain/gift.entity';
import { GiftSchema } from './infrastructure/database/gift.schema';
import { GiftTypeormRepository } from './infrastructure/database/gift.typeorm';
import { GiftHandler } from './infrastructure/gift.handler';

export class GiftModule {
  giftRepository: IBaseRepository<Gift>;
  giftHandler: IEventHandler;
  constructor(
    public datasource: DataSource,
    public messageService: IMessageService,
  ) {
    const giftRepository = datasource.getRepository(GiftSchema);
    this.giftRepository = new GiftTypeormRepository(giftRepository);
    this.giftHandler = new GiftHandler(
      this.messageService,
      this.giftRepository,
    );
  }
}
