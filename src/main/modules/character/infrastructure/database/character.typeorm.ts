import { DataSource, Repository } from 'typeorm';

import { NotFoundException } from '@/shared/exceptions/not-found.exception';

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

  async readOneByIdOrFail(id: number): Promise<Character> {
    return await this.repository.findOneOrFail({
      where: { id },
    });
  }

  async updateOneByIdOrFail(character: Character): Promise<Character> {
    const { id, ...data } = character;
    const updatedCharacter = await this.repository.preload({
      ...data,
      id,
    });
    if (!updatedCharacter) {
      throw new NotFoundException('Character not found');
    }
    return this.repository.save(updatedCharacter);
  }

  async deleteOneByIdOrFail(id: number): Promise<void> {
    const characterToDelete = await this.repository.findOne({
      where: { id },
    });

    if (!characterToDelete) {
      throw new Error('Entity not found');
    }

    await this.repository.delete(id);
  }
}
