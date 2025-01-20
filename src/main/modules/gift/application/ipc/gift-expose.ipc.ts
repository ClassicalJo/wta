import { ipcRenderer } from 'electron';

import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Gift } from '../../domain/gift.entity';
import { IGiftExpose } from './gift-expose.interface';

export const giftExpose: IGiftExpose = {
  read: (id: number) => ipcRenderer.send(RendererMessages.GIFT_READ, id),
  readAll: () => ipcRenderer.send(RendererMessages.GIFT_READ_ALL),
  update: (gift: Gift) => ipcRenderer.send(RendererMessages.GIFT_UPDATE, gift),
  create: (gift: Gift) => ipcRenderer.send(RendererMessages.GIFT_CREATE, gift),
  delete: (id: number) => ipcRenderer.send(RendererMessages.GIFT_DELETE, id),
};
