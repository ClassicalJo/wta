import { BaseTypeOrmRepository } from '@/main/modules/common/infrastructure/database/base-repository.typeorm';

import { IFightRepository } from '../../application/repository/fight-repository.interface';
import { Fight } from '../../domain/fight.entity';

export class FightTypeormRepository
  extends BaseTypeOrmRepository<Fight>
  implements IFightRepository {}
