import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterReadAllUseCase implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public repositoryService: ICharacterRepository,
  ) {
    messageService.onMessage(
      RendererMessages.CHARACTER_READ_ALL,
      this.execute.bind(this),
    );
  }
  public async execute() {
    const characters = await this.repositoryService.readAll();

    this.messageService.sendMessage(
      MainMessages.CHARACTER_READ_ALL_RESPONSE,
      characters,
    );
  }
}
