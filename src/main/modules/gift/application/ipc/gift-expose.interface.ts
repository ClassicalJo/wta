import { ICrudExpose } from '@/main/modules/common/application/interfaces/crud-expose.interface';

import { Gift } from '../../domain/gift.entity';

export type IGiftExpose = ICrudExpose<Gift>;
