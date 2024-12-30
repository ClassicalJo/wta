import { MainMessages } from '../messages/main-messages.enum';

export interface IMainPayloads {
  [MainMessages.MAIN_MESSAGE]: string;
}
