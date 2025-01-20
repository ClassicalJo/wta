import { IBaseRepository } from '@/main/modules/common/infrastructure/database/base-repository.interface';

import { Gift } from '../../domain/gift.entity';

export type IGiftRepository = IBaseRepository<Gift>;
