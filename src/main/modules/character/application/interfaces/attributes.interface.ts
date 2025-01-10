import { Character } from '../../domain/character.entity';

export type IPhysicalAttributes = Pick<
  Character,
  'strength' | 'dexterity' | 'stamina'
>;
export type ISocialAttributes = Pick<
  Character,
  'charisma' | 'manipulation' | 'appearance'
>;
export type IMentalAttributes = Pick<
  Character,
  'perception' | 'intelligence' | 'wits'
>;
