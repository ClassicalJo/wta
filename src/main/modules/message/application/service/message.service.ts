import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

import { IMessageAdapter } from '../interfaces/message-adapter.interface';
import { IMessageService } from '../interfaces/message-service.interface';

export class MessageService implements IMessageService {
  constructor(public readonly messageAdapter: IMessageAdapter) {}
  sendMainMessage(data: IMainPayloads[MainMessages.MAIN_MESSAGE]): void {
    this.messageAdapter.sendMessage(MainMessages.MAIN_MESSAGE, data);
  }

  onMessage<T extends RendererMessages>(
    type: T,
    callback: (payload: IRendererPayloads[T]) => void,
  ): void {
    this.messageAdapter.onMessage(type, callback);
  }
}
