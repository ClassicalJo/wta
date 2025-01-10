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
    strength: {
      type: Number,
      default: 0,
      nullable: false,
    },
    dexterity: {
      type: Number,
      default: 0,
      nullable: false,
    },
    stamina: {
      type: Number,
      default: 0,
      nullable: false,
    },
    charisma: {
      type: Number,
      default: 0,
      nullable: false,
    },
    manipulation: {
      type: Number,
      default: 0,
      nullable: false,
    },
    appearance: {
      type: Number,
      default: 0,
      nullable: false,
    },
    perception: {
      type: Number,
      default: 0,
      nullable: false,
    },
    intelligence: {
      type: Number,
      default: 0,
      nullable: false,
    },
    wits: {
      type: Number,
      default: 0,
      nullable: false,
    },
  },
});
