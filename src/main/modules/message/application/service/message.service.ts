import { BaseException } from '@/shared/exceptions/base.exception';
import { MainEventHandler } from '@/shared/interfaces/main-event-handler.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

import { MainEventHandlerException } from '../../infrastructure/exceptions/main-event-handler.exception';
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
    callback: MainEventHandler<T>,
  ): void {
    this.handlerAdapter.onMessage(type, this.handleException(callback));
  }

  sendMessage<T extends MainMessages>(
    message: T,
    payload?: IMainPayloads[T],
  ): void {
    this.emitterAdapter.send(message, payload);
  }

  handleException<T extends RendererMessages>(
    callback: MainEventHandler<T>,
  ): MainEventHandler<T> {
    return async (payload: IRendererPayloads[T]) => {
      try {
        await callback(payload);
      } catch (error: unknown) {
        if (error instanceof BaseException) {
          console.log(error);
        } else if (error instanceof Error) {
          console.log(new MainEventHandlerException(error.message, error));
        } else {
          console.log(new MainEventHandlerException('Unknown error', error));
        }
      }
    };
  }
}
