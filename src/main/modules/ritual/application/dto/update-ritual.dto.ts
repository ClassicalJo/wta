import { UpdateDto } from '@/main/modules/common/application/dto/update.dto';

import { Ritual } from '../../domain/ritual.entity';

export class UpdateRitualDto extends UpdateDto<Ritual> {
  constructor(id: number, ritual: Omit<Ritual, 'id'>) {
    super(id, ritual);
  }
}
