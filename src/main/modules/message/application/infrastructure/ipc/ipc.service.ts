import { ipcMain } from 'electron';

import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IRendererPayloads } from '@/shared/payloads/renderer-payloads.interface';

import { IHandlerAdapter } from '../../interfaces/message-adapter.interface';

export class IpcService implements IHandlerAdapter {
  onMessage<T extends RendererMessages>(
    type: T,
    callback: (payload: IRendererPayloads[T]) => void,
  ): void {
    ipcMain.on(type, (_, payload) => {
      callback(payload);
    });
  }
}
