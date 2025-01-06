import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterDeleteUseCase implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public characterRepository: ICharacterRepository,
  ) {
    this.messageService.onMessage(
      RendererMessages.CHARACTER_DELETE,
      this.execute.bind(this),
    );
  }
  execute(id: number): void {
    this.characterRepository.deleteOneByIdOrFail(id);
    console.log('deleted character with id ', id);
  }
}
