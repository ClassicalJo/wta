import { UpdateDto } from '@/main/modules/common/application/dto/update.dto';

import { Fight } from '../../domain/fight.entity';

export class BeginFightDto extends UpdateDto<Fight> {
  constructor(id: number, fight: Required<Fight>) {
    super(id, fight);
  }
}
