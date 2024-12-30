import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

import { IMessageService } from '../application/interfaces/message-service.interface';

export class MessageHandler {
  constructor(public messagingService: IMessageService) {
    this.messagingService.onMessage(
      RendererMessages.RENDERER_MESSAGE,
      this.onRendererMessage.bind(this),
    );
  }
  onRendererMessage(
    data: IRendererPayloads[RendererMessages.RENDERER_MESSAGE],
  ): void {
    console.log(RendererMessages.RENDERER_MESSAGE, data);
  }
}
