import { CreateDto } from '@/main/modules/common/application/dto/create.dto';

import { Fight } from '../../domain/fight.entity';

export class CreateFightDto extends CreateDto<Fight> {
  constructor(fight: Omit<Fight, 'id'>) {
    super(fight);
  }
}
