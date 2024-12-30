import { WebContents } from 'electron';

import { MainMessages } from '@/shared/messages/main-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';

import { IEmitterAdapter } from '../../interfaces/emitter-adapter.interface';

export class WebContentsService implements IEmitterAdapter {
  constructor(public webContents: WebContents) {}
  send(type: MainMessages, payload: IMainPayloads[MainMessages.MAIN_MESSAGE]) {
    this.webContents.send(type, payload);
  }
}
