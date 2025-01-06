import { MainEventHandler } from '@/shared/interfaces/main-event-handler.interface';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

export interface IHandlerAdapter {
  onMessage<T extends RendererMessages>(
    type: T,
    callback: MainEventHandler<T>,
  ): void;
}
