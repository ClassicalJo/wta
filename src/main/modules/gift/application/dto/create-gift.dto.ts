import { CreateDto } from '@/main/modules/common/application/dto/create.dto';

import { Gift } from '../../domain/gift.entity';

export class CreateGiftDto extends CreateDto<Gift> {
  constructor(gift: Omit<Gift, 'id'>) {
    super(gift);
  }
}
