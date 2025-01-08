import { DataSource, Repository } from 'typeorm';

import { ICharacterRepository } from '../../application/repository/character-repository.interface';
import { Character } from '../../domain/character.entity';
import { CharacterSchema } from './character.schema';

export class CharacterTypeormRepository implements ICharacterRepository {
  repository: Repository<Character>;
  constructor(public dataSource: DataSource) {
    this.repository = dataSource.getRepository(CharacterSchema);
  }

  async createOne(character: Character): Promise<Character> {
    return await this.repository.save(character);
  }

  async readOne(id: number): Promise<Character> {
    return await this.repository.findOne({ where: { id } });
  }

  async readAll(): Promise<Character[]> {
    return await this.repository.find();
  }

  async updateOne(character: Character): Promise<Character> {
    const updatedCharacter = await this.repository.preload(character);
    return this.repository.save(updatedCharacter);
  }

  async deleteOne(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
