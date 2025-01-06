import { RendererMessages } from '../messages/renderer-messages.enum';
import { IRendererPayloads } from '../payloads/renderer-payloads.interface';

export interface MainEventHandler<T extends RendererMessages> {
  (payload: IRendererPayloads[T]): Promise<void>;
}
