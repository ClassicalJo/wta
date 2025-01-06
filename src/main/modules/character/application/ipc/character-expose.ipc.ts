import { ipcRenderer } from 'electron';

import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

import { Character } from '../../domain/character.entity';
import { ICharacterExpose } from './character-expose.interface';

export const characterExpose: ICharacterExpose = {
  read: (id: number) => ipcRenderer.send(RendererMessages.CHARACTER_READ, id),
  update: (character: Character) =>
    ipcRenderer.send(RendererMessages.CHARACTER_UPDATE, character),
  create: (character: Character) =>
    ipcRenderer.send(RendererMessages.CHARACTER_CREATE, character),
  delete: (id: number) =>
    ipcRenderer.send(RendererMessages.CHARACTER_DELETE, id),
};
