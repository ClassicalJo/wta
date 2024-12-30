import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

import { IEmitterAdapter } from '../interfaces/emitter-adapter.interface';
import { IHandlerAdapter } from '../interfaces/message-adapter.interface';
import { IMessageService } from '../interfaces/message-service.interface';

export class MessageService implements IMessageService {
  constructor(
    public readonly handlerAdapter: IHandlerAdapter,
    public readonly emitterAdapter: IEmitterAdapter,
  ) {}
  onMessage<T extends RendererMessages>(
    type: T,
    callback: (payload: IRendererPayloads[T]) => void,
  ): void {
    this.handlerAdapter.onMessage(type, callback);
  }

  sendMessage<T extends MainMessages>(
    message: T,
    payload?: IMainPayloads[T],
  ): void {
    this.emitterAdapter.send(message, payload);
  }
}
