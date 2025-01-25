import { IBaseRepository } from '@/main/modules/common/infrastructure/database/base-repository.interface';

import { Ritual } from '../../domain/ritual.entity';

export type IRitualRepository = IBaseRepository<Ritual>;
