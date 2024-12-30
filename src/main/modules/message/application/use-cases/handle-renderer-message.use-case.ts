import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

import { IMessageService } from '../interfaces/message-service.interface';

export class HandleRendererMessageUseCase {
  constructor(public messageService: IMessageService) {
    messageService.onMessage(
      RendererMessages.RENDERER_MESSAGE,
      this.execute.bind(this),
    );
  }

  execute(data: IRendererPayloads[RendererMessages.RENDERER_MESSAGE]): void {
    console.log(data);
    this.messageService.sendMessage(
      MainMessages.MAIN_MESSAGE,
      'Hello from main!',
    );
  }
}
