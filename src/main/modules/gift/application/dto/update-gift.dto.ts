import { UpdateDto } from '@/main/modules/common/application/dto/update.dto';

import { Gift } from '../../domain/gift.entity';

export class UpdateGiftDto extends UpdateDto<Gift> {
  constructor(id: number, gift: Omit<Gift, 'id'>) {
    super(id, gift);
  }
}
