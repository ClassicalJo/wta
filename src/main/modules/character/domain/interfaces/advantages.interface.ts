import { Character } from '../character.entity';

export type IRenown = Pick<Character, 'glory' | 'honor' | 'wisdom'>;
export type ISelf = Pick<Character, 'rage' | 'gnosis' | 'willpower'>;
export type IAdvantages = Pick<Character, 'gifts' | 'rites' | 'backgrounds'>;
