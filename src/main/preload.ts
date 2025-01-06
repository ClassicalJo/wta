// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

import { RendererEventHandler } from '@/shared/interfaces/renderer-event-handler.interface';
import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';

import { characterExpose } from './modules/character/application/ipc/character-expose.ipc';

contextBridge.exposeInMainWorld('electron', {
  rendererMessage: (data: string) =>
    ipcRenderer.send(RendererMessages.RENDERER_MESSAGE, data),
  onMainMessage: <T extends MainMessages>(
    type: T,
    callback: (payload: IMainPayloads[T]) => void,
  ) => ipcRenderer.on(type, (_, payload) => callback(payload)),
  offMainMessage: <T extends MainMessages>(
    type: T,
    callback: RendererEventHandler<T>,
  ) => ipcRenderer.off(type, (_, payload) => callback(payload)),
  db: {
    character: characterExpose,
  },
});
