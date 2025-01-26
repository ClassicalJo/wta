// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

import { MainMessages } from '@/shared/messages/main-messages.enum';
import { RendererMessages } from '@/shared/messages/renderer-messages.enum';
import { IMainPayloads } from '@/shared/payloads/main-payloads.interface';

import { characterExpose } from './modules/character/application/ipc/character-expose.ipc';
import { fightExpose } from './modules/fight/application/ipc/fight-expose.ipc';
import { giftExpose } from './modules/gift/application/ipc/gift-expose.ipc';
import { ritualExpose } from './modules/ritual/application/ipc/ritual-expose.ipc';

contextBridge.exposeInMainWorld('electron', {
  rendererMessage: (data: string) =>
    ipcRenderer.send(RendererMessages.RENDERER_MESSAGE, data),
  onMainMessage: <T extends MainMessages>(
    type: T,
    callback: (payload: IMainPayloads[T]) => void,
  ) => {
    const suscription = (
      _: Electron.IpcRendererEvent,
      payload: IMainPayloads[T],
    ) => callback(payload);
    ipcRenderer.on(type, suscription);
    return suscription;
  },
  offMainMessage: <T extends MainMessages>(
    type: T,
    callback: (_: Electron.IpcRendererEvent, payload: IMainPayloads[T]) => void,
  ) => ipcRenderer.off(type, callback),
  db: {
    character: characterExpose,
    gift: giftExpose,
    ritual: ritualExpose,
    fight: fightExpose,
  },
});
