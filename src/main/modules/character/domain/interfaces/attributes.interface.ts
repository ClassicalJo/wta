import { Character } from '../character.entity';

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

export type IAttributes = IPhysicalAttributes &
  ISocialAttributes &
  IMentalAttributes;
