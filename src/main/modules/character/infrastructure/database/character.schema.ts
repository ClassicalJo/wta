import { EntitySchema } from 'typeorm';

import { Character } from '../../domain/character.entity';

export const CharacterSchema = new EntitySchema<Character>({
  name: 'Character',
  target: Character,
  tableName: 'character',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: 'increment',
    },
    name: {
      type: String,
    },
  },
});
