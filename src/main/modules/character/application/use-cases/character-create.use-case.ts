import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { DtoMapper } from '@/main/modules/common/application/mapper/dto.mapper';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { CreateCharacterDto } from '../dto/create-character.dto';
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
  public async execute(characterDto: CreateCharacterDto): Promise<void> {
    const character = DtoMapper.toEntity<Character>(characterDto);
    const createdCharacter =
      await this.characterRepository.createOne(character);
    this.messageService.sendMessage(
      MainMessages.CHARACTER_CREATE_RESPONSE,
      createdCharacter,
    );
  }
}
