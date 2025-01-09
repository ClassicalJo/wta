import { Character } from '@/main/modules/character/domain/character.entity';
import { MainEventHandlerException } from '@/main/modules/message/infrastructure/exceptions/main-event-handler.exception';

import { MainMessages } from '../messages/main-messages.enum';

export interface IMainPayloads {
  [MainMessages.MAIN_MESSAGE]: string;
  [MainMessages.MAIN_EVENT_ERROR]: MainEventHandlerException;
  [MainMessages.CHARACTER_CREATE_RESPONSE]: Character;
  [MainMessages.CHARACTER_READ_RESPONSE]: Character;
  [MainMessages.CHARACTER_UPDATE_RESPONSE]: Character;
  [MainMessages.CHARACTER_DELETE_RESPONSE]: Character;
  [MainMessages.CHARACTER_READ_ALL_RESPONSE]: Character[];
}
