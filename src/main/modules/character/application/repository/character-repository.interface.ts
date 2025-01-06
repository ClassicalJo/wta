import { Character } from '../../domain/character.entity';

export interface ICharacterRepository {
  createOne(character: Character): Promise<Character>;
  readOneByIdOrFail(id: number): Promise<Character>;
  updateOneByIdOrFail(character: Character): Promise<Character>;
  deleteOneByIdOrFail(id: number): Promise<void>;
}
