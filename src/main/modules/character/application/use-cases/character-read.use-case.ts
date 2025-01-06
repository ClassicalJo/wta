import { IUseCase } from '@/main/modules/common/application/interfaces/use-case.interface';
import { IMessageService } from '@/main/modules/message/application/interfaces/message-service.interface';
import { NotFoundException } from '@/shared/exceptions/not-found.exception';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { CharacterRepository } from '../../infrastructure/database/character.repository';

export class CharacterReadUseCase implements IUseCase {
  constructor(
    public messageService: IMessageService,
    public repositoryService: CharacterRepository,
  ) {
    messageService.onMessage(
      RendererMessages.CHARACTER_READ,
      this.execute.bind(this),
    );
  }
  public async execute(id: number) {
    try {
      const character = await this.repositoryService.readOneByIdOrFail(id);
      console.log(character);
    } catch (error: unknown) {
      throw new NotFoundException(`Character with id ${id} not found`);
    }
  }
}
