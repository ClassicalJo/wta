import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

export interface IMessageService {
  onMessage<T extends RendererMessages>(
    type: T,
    callback: (payload: IRendererPayloads[T]) => void,
  ): void;
}
