import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { ReadUseCase } from '@/main/modules/common/application/use-cases/read.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterReadUseCase
  extends ReadUseCase<Character>
  implements IUseCase
{
  constructor(
    public messageService: IMessageService,
    public repositoryService: ICharacterRepository,
  ) {
    super(
      RendererMessages.CHARACTER_READ,
      MainMessages.CHARACTER_READ_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
