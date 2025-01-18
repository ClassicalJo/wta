import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { DeleteUseCase } from '@/main/modules/common/application/use-cases/delete.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterDeleteUseCase
  extends DeleteUseCase<Character>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly characterRepository: ICharacterRepository,
  ) {
    super(
      RendererMessages.CHARACTER_DELETE,
      MainMessages.CHARACTER_DELETE_RESPONSE,
      messageService,
      characterRepository,
    );
  }
}
