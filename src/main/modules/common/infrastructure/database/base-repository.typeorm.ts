import { FindOneOptions, Repository } from 'typeorm';

import { BaseEntity } from '@/main/modules/common/domain/base.entity';

export abstract class BaseTypeOrmRepository<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async createOne(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  async readOne(id: number): Promise<T> {
    return await this.repository.findOne({
      where: { id },
    } as FindOneOptions<T>);
  }

  async readAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async updateOne(entity: T): Promise<T> {
    const updatedGift = await this.repository.preload(entity);
    return this.repository.save(updatedGift);
  }

  async deleteOne(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
