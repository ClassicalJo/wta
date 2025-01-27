import { ipcRenderer } from 'electron';

import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Fight } from '../../domain/fight.entity';
import { IFightExpose } from './fight-expose.interface';

export const fightExpose: IFightExpose = {
  read: (id: number) => ipcRenderer.send(RendererMessages.FIGHT_READ, id),
  readAll: () => ipcRenderer.send(RendererMessages.FIGHT_READ_ALL),
  update: (fight: Fight) =>
    ipcRenderer.send(RendererMessages.FIGHT_UPDATE, fight),
  create: (fight: Fight) =>
    ipcRenderer.send(RendererMessages.FIGHT_CREATE, fight),
  delete: (id: number) => ipcRenderer.send(RendererMessages.FIGHT_DELETE, id),
  begin: (id: number) => ipcRenderer.send(RendererMessages.FIGHT_BEGIN, id),
};
