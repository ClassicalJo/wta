import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

export interface IMessageService {
  onMessage<T extends RendererMessages>(
    type: T,
    callback: (payload: IRendererPayloads[T]) => void,
  ): void;

  sendMessage<T extends MainMessages>(
    message: T,
    payload?: IMainPayloads[T],
  ): void;
}
