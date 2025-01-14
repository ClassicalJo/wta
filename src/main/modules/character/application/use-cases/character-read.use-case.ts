import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { CharacterSchema } from '../../infrastructure/database/character.schema';
import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterReadUseCase implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public repositoryService: ICharacterRepository,
  ) {
    messageService.onMessage(
      RendererMessages.CHARACTER_READ,
      this.execute.bind(this),
    );
  }
  public async execute(id: number) {
    const dbCharacter = await this.repositoryService.readOne(id);

    if (!dbCharacter)
      throw new NotFoundException(CharacterSchema.options.name, id);

    this.messageService.sendMessage(
      MainMessages.CHARACTER_READ_RESPONSE,
      dbCharacter,
    );
  }
}
