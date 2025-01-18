import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { CreateUseCase } from '@/main/modules/common/application/use-cases/create.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { CreateCharacterDto } from '../dto/create-character.dto';
import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterCreateUseCase
  extends CreateUseCase<Character, CreateCharacterDto>
  implements IUseCase
{
  constructor(
    public readonly messageService: IMessageService,
    public readonly characterRepository: ICharacterRepository,
  ) {
    super(
      RendererMessages.CHARACTER_CREATE,
      MainMessages.CHARACTER_CREATE_RESPONSE,
      messageService,
      characterRepository,
    );
  }
}
