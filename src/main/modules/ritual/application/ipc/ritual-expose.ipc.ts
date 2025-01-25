import { ipcRenderer } from 'electron';

import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Ritual } from '../../domain/ritual.entity';
import { IRitualExpose } from './ritual-expose.interface';

export const ritualExpose: IRitualExpose = {
  read: (id: number) => ipcRenderer.send(RendererMessages.RITUAL_READ, id),
  readAll: () => ipcRenderer.send(RendererMessages.RITUAL_READ_ALL),
  update: (ritual: Ritual) =>
    ipcRenderer.send(RendererMessages.RITUAL_UPDATE, ritual),
  create: (ritual: Ritual) =>
    ipcRenderer.send(RendererMessages.RITUAL_CREATE, ritual),
  delete: (id: number) => ipcRenderer.send(RendererMessages.RITUAL_DELETE, id),
};
