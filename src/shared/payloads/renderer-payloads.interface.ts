import { RendererMessages } from '../messages/renderer-messages.enum';

export interface IRendererPayloads {
  [RendererMessages.RENDERER_MESSAGE]: string;
}
