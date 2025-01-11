import { Character } from '../character.entity';

export type IDetails = Pick<
  Character,
  | 'name'
  | 'playerName'
  | 'chronicle'
  | 'breed'
  | 'auspice'
  | 'tribe'
  | 'packName'
  | 'packTotem'
  | 'concept'
>;
