import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { CharacterSchema } from '../../infrastructure/database/character.schema';
import { UpdateCharacterDto } from '../dto/update-character.dto';
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
  public async execute(characterDto: UpdateCharacterDto) {
    const dbCharacter = await this.repositoryService.readOne(characterDto.id);

    if (!dbCharacter)
      throw new NotFoundException(
        CharacterSchema.options.name,
        characterDto.id,
      );

    const character = { ...dbCharacter, ...characterDto.character };

    const updatedCharacter = await this.repositoryService.updateOne(character);

    this.messageService.sendMessage(
      MainMessages.CHARACTER_UPDATE_RESPONSE,
      updatedCharacter,
    );
  }
}
