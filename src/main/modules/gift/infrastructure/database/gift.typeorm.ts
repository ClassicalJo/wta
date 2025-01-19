import { BaseTypeOrmRepository } from '@/main/modules/common/infrastructure/database/base-repository.typeorm';

import { IGiftRepository } from '../../application/repository/gift-repository.interface';
import { Gift } from '../../domain/gift.entity';

export class GiftTypeormRepository
  extends BaseTypeOrmRepository<Gift>
  implements IGiftRepository {}
