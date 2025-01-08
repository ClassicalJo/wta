import { Character } from '../../domain/character.entity';

export interface ICharacterRepository {
  createOne(character: Character): Promise<Character>;
  readOne(id: number): Promise<Character>;
  readAll(): Promise<Character[]>;
  updateOne(character: Character): Promise<Character>;
  deleteOne(id: number): Promise<void>;
}
