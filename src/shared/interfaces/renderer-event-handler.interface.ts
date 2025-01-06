import { MainMessages } from '../messages/main-messages.enum';
import { IMainPayloads } from '../payloads/main-payloads.interface';

export interface RendererEventHandler<T extends MainMessages> {
  (payload: IMainPayloads[T]): Promise<void>;
}
