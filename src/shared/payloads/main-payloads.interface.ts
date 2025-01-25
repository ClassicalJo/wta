import { Character } from '@/main/modules/character/domain/character.entity';
import { Gift } from '@/main/modules/gift/domain/gift.entity';
import { MainEventHandlerException } from '@/main/modules/message/infrastructure/exceptions/main-event-handler.exception';
import { Ritual } from '@/main/modules/ritual/domain/ritual.entity';

import { MainMessages } from '../messages/main-messages.enum';

export interface IMainPayloads {
  [MainMessages.MAIN_MESSAGE]: string;
  [MainMessages.MAIN_EVENT_ERROR]: MainEventHandlerException;
  [MainMessages.CHARACTER_CREATE_RESPONSE]: Character;
  [MainMessages.CHARACTER_READ_RESPONSE]: Character;
  [MainMessages.CHARACTER_UPDATE_RESPONSE]: Character;
  [MainMessages.CHARACTER_DELETE_RESPONSE]: Character;
  [MainMessages.CHARACTER_READ_ALL_RESPONSE]: Character[];

  [MainMessages.GIFT_CREATE_RESPONSE]: Gift;
  [MainMessages.GIFT_READ_RESPONSE]: Gift;
  [MainMessages.GIFT_UPDATE_RESPONSE]: Gift;
  [MainMessages.GIFT_DELETE_RESPONSE]: Gift;
  [MainMessages.GIFT_READ_ALL_RESPONSE]: Gift[];

  [MainMessages.RITUAL_CREATE_RESPONSE]: Ritual;
  [MainMessages.RITUAL_READ_RESPONSE]: Ritual;
  [MainMessages.RITUAL_UPDATE_RESPONSE]: Ritual;
  [MainMessages.RITUAL_DELETE_RESPONSE]: Ritual;
  [MainMessages.RITUAL_READ_ALL_RESPONSE]: Ritual[];
}
