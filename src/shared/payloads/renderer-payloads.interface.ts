import { CreateCharacterDto } from '@/main/modules/character/application/dto/create-character.dto';
import { UpdateCharacterDto } from '@/main/modules/character/application/dto/update-character.dto';
import { CreateFightDto } from '@/main/modules/fight/application/dto/create-fight.dto';
import { UpdateFightDto } from '@/main/modules/fight/application/dto/update-fight.dto';
import { CreateGiftDto } from '@/main/modules/gift/application/dto/create-gift.dto';
import { UpdateGiftDto } from '@/main/modules/gift/application/dto/update-gift.dto';
import { CreateRitualDto } from '@/main/modules/ritual/application/dto/create-ritual.dto';
import { UpdateRitualDto } from '@/main/modules/ritual/application/dto/update-ritual.dto';

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

  [RendererMessages.RITUAL_CREATE]: CreateRitualDto;
  [RendererMessages.RITUAL_DELETE]: number;
  [RendererMessages.RITUAL_UPDATE]: UpdateRitualDto;
  [RendererMessages.RITUAL_READ]: number;
  [RendererMessages.RITUAL_READ_ALL]: void;

  [RendererMessages.FIGHT_CREATE]: CreateFightDto;
  [RendererMessages.FIGHT_DELETE]: number;
  [RendererMessages.FIGHT_UPDATE]: UpdateFightDto;
  [RendererMessages.FIGHT_READ]: number;
  [RendererMessages.FIGHT_READ_ALL]: void;
}
