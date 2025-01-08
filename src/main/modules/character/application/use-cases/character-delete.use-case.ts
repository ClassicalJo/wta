import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { CharacterSchema } from '../../infrastructure/database/character.schema';
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
  public async execute(id: number): Promise<void> {
    const dbCharacter = await this.characterRepository.readOne(id);

    if (!dbCharacter)
      throw new NotFoundException(CharacterSchema.options.name, id);

    await this.characterRepository.deleteOne(id);

    this.messageService.sendMessage(
      MainMessages.CHARACTER_DELETE_RESPONSE,
      dbCharacter,
    );
  }
}
