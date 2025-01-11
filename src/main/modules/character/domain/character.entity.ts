import { BaseEntity } from '../../common/domain/base.entity';
import { Auspice } from './auspice.enum';
import { Breed } from './breed.enum';

export class Character extends BaseEntity {
  // Character details
  name?: string;
  playerName?: string;
  chronicle?: string;
  breed?: Breed;
  auspice?: Auspice;
  tribe?: string;
  packName?: string;
  packTotem?: string;
  concept?: string;

  // Attributes
  strength?: number;
  dexterity?: number;
  stamina?: number;
  charisma?: number;
  manipulation?: number;
  appearance?: number;
  perception?: number;
  intelligence?: number;
  wits?: number;

  // Abilities
  // Talents
  alertness?: number;
  athletics?: number;
  brawl?: number;
  empathy?: number;
  expression?: number;
  intimidation?: number;
  leadership?: number;
  primalUrge?: number;
  streetwise?: number;
  subterfuge?: number;

  //Skills
  animalKen?: number;
  crafts?: number;
  drive?: number;
  etiquette?: number;
  firearms?: number;
  larceny?: number;
  melee?: number;
  performance?: number;
  stealth?: number;
  survival?: number;

  //Knowledges
  academics?: number;
  computer?: number;
  enigmas?: number;
  investigation?: number;
  law?: number;
  medicine?: number;
  occult?: number;
  rituals?: number;
  science?: number;
  technology?: number;

  //Advantages
  //Renown
  glory?: number;
  honor?: number;
  wisdom?: number;

  //Self
  rage?: number;
  gnosis?: number;
  willpower?: number;

  constructor(data?: { id?: number; name?: string }) {
    super({ id: data?.id });
  }
}
