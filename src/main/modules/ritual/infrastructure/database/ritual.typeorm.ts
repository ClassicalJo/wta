import { BaseTypeOrmRepository } from '@/main/modules/common/infrastructure/database/base-repository.typeorm';

import { IRitualRepository } from '../../application/repository/ritual-repository.interface';
import { Ritual } from '../../domain/ritual.entity';

export class RitualTypeormRepository
  extends BaseTypeOrmRepository<Ritual>
  implements IRitualRepository {}
