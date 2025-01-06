import { IEventHandler } from '../../common/application/interfaces/event-handler.interface';
import { IUseCase } from '../../common/application/interfaces/use-case.interface';
import { IMessageService } from '../../message/application/interfaces/message-service.interface';
import { CharacterCreateUseCase } from '../application/use-cases/character-create.use-case';
import { CharacterDeleteUseCase } from '../application/use-cases/character-delete.use-case';
import { CharacterReadUseCase } from '../application/use-cases/character-read.use-case';
import { CharacterUpdateUseCase } from '../application/use-cases/character-update.use-case';
import { CharacterRepository } from './database/character.repository';

export class CharacterHandler implements IEventHandler {
  useCases: IUseCase[];

  constructor(
    public messageService: IMessageService,
    public characterRepository: CharacterRepository,
  ) {
    this.useCases = [
      new CharacterCreateUseCase(messageService, characterRepository),
      new CharacterReadUseCase(messageService, characterRepository),
      new CharacterUpdateUseCase(messageService, characterRepository),
      new CharacterDeleteUseCase(messageService, characterRepository),
    ];
  }
}
