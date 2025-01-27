import { ICrudExpose } from '@/main/modules/common/application/interfaces/crud-expose.interface';

import { Fight } from '../../domain/fight.entity';

export type IFightExpose = ICrudExpose<Fight> & {
  begin: (id: number) => void;
};
