import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { ICharacterRepository } from '../repository/character-repository.interface';

export class CharacterUpdateUseCase implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public repositoryService: ICharacterRepository,
  ) {
    messageService.onMessage(
      RendererMessages.CHARACTER_UPDATE,
      this.execute.bind(this),
    );
  }
  public async execute(character: Character) {
    try {
      const updatedCharacter =
        await this.repositoryService.updateOneByIdOrFail(character);
      console.log(updatedCharacter);
    } catch (error: unknown) {
      throw new NotFoundException(
        `Character with id ${character.id} not found`,
      );
    }
  }
}
