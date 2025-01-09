import { Character } from '@/main/modules/character/domain/character.entity';

import { RendererMessages } from '../messages/renderer-messages.enum';

export interface IRendererPayloads {
  [RendererMessages.RENDERER_MESSAGE]: string;
  [RendererMessages.CHARACTER_CREATE]: Omit<Character, 'id'>;
  [RendererMessages.CHARACTER_DELETE]: number;
  [RendererMessages.CHARACTER_UPDATE]: Character;
  [RendererMessages.CHARACTER_READ]: number;
  [RendererMessages.CHARACTER_READ_ALL]: void;
}
