import { BackgroundSchema } from './background/infrastructure/database/background.schema';
import { CharacterSchema } from './character/infrastructure/database/character.schema';
import { FightSchema } from './fight/infrastructure/database/fight.schema';
import { GiftSchema } from './gift/infrastructure/database/gift.schema';
import { RitualSchema } from './ritual/infrastructure/database/ritual.schema';

export const schemas = {
  CharacterSchema,
  FightSchema,
  BackgroundSchema,
  GiftSchema,
  RitualSchema,
};
