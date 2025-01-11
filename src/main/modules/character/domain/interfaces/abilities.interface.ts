import { Character } from '../character.entity';

export type ITalents = Pick<
  Character,
  | 'alertness'
  | 'athletics'
  | 'brawl'
  | 'empathy'
  | 'expression'
  | 'intimidation'
  | 'leadership'
  | 'primalUrge'
  | 'streetwise'
  | 'subterfuge'
>;
export type ISkills = Pick<
  Character,
  | 'animalKen'
  | 'crafts'
  | 'drive'
  | 'etiquette'
  | 'firearms'
  | 'larceny'
  | 'melee'
  | 'performance'
  | 'stealth'
  | 'survival'
>;
export type IKnowledges = Pick<
  Character,
  | 'academics'
  | 'computer'
  | 'enigmas'
  | 'investigation'
  | 'law'
  | 'medicine'
  | 'occult'
  | 'rituals'
  | 'science'
  | 'technology'
>;
