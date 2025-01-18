import { DataSource } from 'typeorm';

import { IEventHandler } from '../common/application/interfaces/event-handler.interface';
import { IBaseRepository } from '../common/infrastructure/database/base-repository.interface';
import { IMessageService } from '../message/application/interfaces/message-service.interface';
import { Character } from './domain/character.entity';
import { CharacterHandler } from './infrastructure/character.handler';
import { CharacterSchema } from './infrastructure/database/character.schema';
import { CharacterTypeormRepository } from './infrastructure/database/character.typeorm';

export class CharacterModule {
  characterRepository: IBaseRepository<Character>;
  characterHandler: IEventHandler;
  constructor(
    public datasource: DataSource,
    public messageService: IMessageService,
  ) {
    const characterRepository = datasource.getRepository(CharacterSchema);
    this.characterRepository = new CharacterTypeormRepository(
      characterRepository,
    );
    this.characterHandler = new CharacterHandler(
      this.messageService,
      this.characterRepository,
    );
  }
}
