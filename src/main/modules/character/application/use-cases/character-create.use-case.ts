import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterCreateUseCase implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public characterRepository: ICharacterRepository,
  ) {
    this.messageService.onMessage(
      RendererMessages.CHARACTER_CREATE,
      this.execute.bind(this),
    );
  }
  execute(character: Character): void {
    const createdCharacter = this.characterRepository.createOne(character);
    console.log(createdCharacter);
  }
}
