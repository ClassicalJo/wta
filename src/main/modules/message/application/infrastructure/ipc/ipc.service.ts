import { ipcMain } from 'electron';

import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

import { IMessageAdapter } from '../../interfaces/message-adapter.interface';

export class IpcService implements IMessageAdapter {
  sendMessage<T extends MainMessages>(
    message: T,
    payload?: IMainPayloads[T],
  ): void {
    ipcMain.emit(message, payload);
  }
  onMessage<T extends RendererMessages>(
    type: T,
    callback: (payload: IRendererPayloads[T]) => void,
  ): void {
    ipcMain.on(type, (_, payload) => {
      callback(payload);
    });
  }
}
