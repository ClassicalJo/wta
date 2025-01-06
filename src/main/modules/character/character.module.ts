import { OrmConfig } from '@/main/config/orm.config';

import { IMessageService } from '../message/application/interfaces/message-service.interface';
import { CharacterHandler } from './infrastructure/character.handler';
import { CharacterRepository } from './infrastructure/database/character.repository';

export class CharacterModule {
  characterRepository: CharacterRepository;
  characterHandler: CharacterHandler;
  constructor(
    public ormConfig: OrmConfig,
    public messageService: IMessageService,
  ) {
    this.characterRepository = new CharacterRepository(ormConfig);
    this.characterHandler = new CharacterHandler(
      this.messageService,
      this.characterRepository,
    );
  }
}
