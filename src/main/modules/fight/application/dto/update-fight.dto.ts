import { UpdateDto } from '@/main/modules/common/application/dto/update.dto';

import { Fight } from '../../domain/fight.entity';

export class UpdateFightDto extends UpdateDto<Fight> {
  constructor(id: number, fight: Omit<Fight, 'id'>) {
    super(id, fight);
  }
}
