import { CreateDto } from '@/main/modules/common/application/dto/create.dto';

import { Ritual } from '../../domain/ritual.entity';

export class CreateRitualDto extends CreateDto<Ritual> {
  constructor(ritual: Omit<Ritual, 'id'>) {
    super(ritual);
  }
}
