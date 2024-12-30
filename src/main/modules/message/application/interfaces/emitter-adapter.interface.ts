import { MainMessages } from '@/shared/messages/main-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';

export interface IEmitterAdapter {
  send: <T extends MainMessages>(type: T, payload: IMainPayloads[T]) => void;
}
