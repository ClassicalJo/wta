import { DataSource } from 'typeorm';

import { IMessageService } from '../message/application/interfaces/message-service.interface';
import { CharacterHandler } from './infrastructure/character.handler';
import { CharacterTypeormRepository } from './infrastructure/database/character.typeorm';

export class CharacterModule {
  characterRepository: CharacterTypeormRepository;
  characterHandler: CharacterHandler;
  constructor(
    public datasource: DataSource,
    public messageService: IMessageService,
  ) {
    this.characterRepository = new CharacterTypeormRepository(datasource);
    this.characterHandler = new CharacterHandler(
      this.messageService,
      this.characterRepository,
    );
  }
}
