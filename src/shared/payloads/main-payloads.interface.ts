import { MainEventHandlerException } from '@/main/modules/message/infrastructure/exceptions/main-event-handler.exception';

import { MainMessages } from '../messages/main-messages.enum';

export interface IMainPayloads {
  [MainMessages.MAIN_MESSAGE]: string;
  [MainMessages.MAIN_EVENT_ERROR]: MainEventHandlerException;
}
