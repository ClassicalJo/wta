import { ipcMain } from 'electron';

import { MainEventHandler } from '@/shared/interfaces/main-event-handler.interface';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { IHandlerAdapter } from '../../interfaces/message-adapter.interface';

export class IpcService implements IHandlerAdapter {
  onMessage<T extends RendererMessages>(
    type: T,
    callback: MainEventHandler<T>,
  ): void {
    ipcMain.on(type, async (_, payload) => {
      await callback(payload);
    });
  }
}
