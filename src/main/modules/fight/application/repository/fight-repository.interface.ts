import { IBaseRepository } from '@/main/modules/common/infrastructure/database/base-repository.interface';

import { Fight } from '../../domain/fight.entity';

export type IFightRepository = IBaseRepository<Fight>;
