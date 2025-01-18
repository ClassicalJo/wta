import { EntitySchema } from 'typeorm';

import { withBaseSchemaColumns } from '@/main/modules/common/infrastructure/database/base.schema';

import { Auspice } from '../../domain/auspice.enum';
import { Breed } from '../../domain/breed.enum';
import { Character } from '../../domain/character.entity';

export const CharacterSchema = new EntitySchema<Character>({
  name: 'Character',
  target: Character,
  tableName: 'character',
  columns: withBaseSchemaColumns({
    name: {
      type: String,
      nullable: true,
    },
    playerName: {
      type: String,
      nullable: true,
    },
    chronicle: {
      type: String,
      nullable: true,
    },
    breed: {
      enum: Breed,
      type: String,
      nullable: true,
    },
    auspice: {
      enum: Auspice,
      type: String,
      nullable: true,
    },
    tribe: {
      type: String,
      nullable: true,
    },
    packName: {
      type: String,
      nullable: true,
    },
    packTotem: {
      type: String,
      nullable: true,
    },
    concept: {
      type: String,
      nullable: true,
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
    alertness: {
      type: Number,
      default: 0,
      nullable: false,
    },
    athletics: {
      type: Number,
      default: 0,
      nullable: false,
    },
    brawl: {
      type: Number,
      default: 0,
      nullable: false,
    },
    empathy: {
      type: Number,
      default: 0,
      nullable: false,
    },
    expression: {
      type: Number,
      default: 0,
      nullable: false,
    },
    intimidation: {
      type: Number,
      default: 0,
      nullable: false,
    },
    leadership: {
      type: Number,
      default: 0,
      nullable: false,
    },
    primalUrge: {
      type: Number,
      default: 0,
      nullable: false,
    },
    streetwise: {
      type: Number,
      default: 0,
      nullable: false,
    },
    subterfuge: {
      type: Number,
      default: 0,
      nullable: false,
    },
    animalKen: {
      type: Number,
      default: 0,
      nullable: false,
    },
    crafts: {
      type: Number,
      default: 0,
      nullable: false,
    },
    drive: {
      type: Number,
      default: 0,
      nullable: false,
    },
    etiquette: {
      type: Number,
      default: 0,
      nullable: false,
    },
    firearms: {
      type: Number,
      default: 0,
      nullable: false,
    },
    larceny: {
      type: Number,
      default: 0,
      nullable: false,
    },
    melee: {
      type: Number,
      default: 0,
      nullable: false,
    },
    performance: {
      type: Number,
      default: 0,
      nullable: false,
    },
    stealth: {
      type: Number,
      default: 0,
      nullable: false,
    },
    survival: {
      type: Number,
      default: 0,
      nullable: false,
    },
    academics: {
      type: Number,
      default: 0,
      nullable: false,
    },
    computer: {
      type: Number,
      default: 0,
      nullable: false,
    },
    enigmas: {
      type: Number,
      default: 0,
      nullable: false,
    },
    investigation: {
      type: Number,
      default: 0,
      nullable: false,
    },
    law: {
      type: Number,
      default: 0,
      nullable: false,
    },
    medicine: {
      type: Number,
      default: 0,
      nullable: false,
    },
    occult: {
      type: Number,
      default: 0,
      nullable: false,
    },
    rituals: {
      type: Number,
      default: 0,
      nullable: false,
    },
    science: {
      type: Number,
      default: 0,
      nullable: false,
    },
    technology: {
      type: Number,
      default: 0,
      nullable: false,
    },
    glory: {
      type: Number,
      default: 0,
      nullable: false,
    },
    honor: {
      type: Number,
      default: 0,
      nullable: false,
    },
    wisdom: {
      type: Number,
      default: 0,
      nullable: false,
    },
    rage: {
      type: Number,
      default: 0,
      nullable: false,
    },
    gnosis: {
      type: Number,
      default: 0,
      nullable: false,
    },
    willpower: {
      type: Number,
      default: 0,
      nullable: false,
    },
  }),
});
