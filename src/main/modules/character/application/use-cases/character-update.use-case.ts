import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { UpdateUseCase } from '@/main/modules/common/application/use-cases/update.use-case';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { UpdateCharacterDto } from '../dto/update-character.dto';
import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterUpdateUseCase
  extends UpdateUseCase<Character, UpdateCharacterDto>
  implements IUseCase
{
  constructor(
    public messageService: IMessageService,
    public repositoryService: ICharacterRepository,
  ) {
    super(
      RendererMessages.CHARACTER_UPDATE,
      MainMessages.CHARACTER_UPDATE_RESPONSE,
      messageService,
      repositoryService,
    );
  }
}
