import { CreateCharacterDto } from '@/main/modules/character/application/dto/create-character.dto';
import { UpdateCharacterDto } from '@/main/modules/character/application/dto/update-character.dto';
import { CreateGiftDto } from '@/main/modules/gift/application/dto/create-gift.dto';
import { UpdateGiftDto } from '@/main/modules/gift/application/dto/update-gift.dto';

import { RendererMessages } from '../messages/renderer-messages.enum';

export interface IRendererPayloads {
  [RendererMessages.RENDERER_MESSAGE]: string;
  [RendererMessages.CHARACTER_CREATE]: CreateCharacterDto;
  [RendererMessages.CHARACTER_DELETE]: number;
  [RendererMessages.CHARACTER_UPDATE]: UpdateCharacterDto;
  [RendererMessages.CHARACTER_READ]: number;
  [RendererMessages.CHARACTER_READ_ALL]: void;

  [RendererMessages.GIFT_CREATE]: CreateGiftDto;
  [RendererMessages.GIFT_DELETE]: number;
  [RendererMessages.GIFT_UPDATE]: UpdateGiftDto;
  [RendererMessages.GIFT_READ]: number;
  [RendererMessages.GIFT_READ_ALL]: void;
}
