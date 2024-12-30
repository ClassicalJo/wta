// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

import { RendererMessages } from '@/shared/messages/renderer-messages.enum';

contextBridge.exposeInMainWorld('electron', {
  rendererMessage: (data: string) =>
    ipcRenderer.send(RendererMessages.RENDERER_MESSAGE, data),
});
