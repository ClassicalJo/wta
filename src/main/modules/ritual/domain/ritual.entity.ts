import { BaseEntity } from '../../common/domain/base.entity';
import { RitualType } from './ritual-type.enum';

export class Ritual extends BaseEntity {
  name?: string;
  level?: number;
  type?: RitualType;
  description?: string;
  system?: string;
  dataSource?: string;
  constructor(data?: Partial<Ritual>) {
    super({ id: data?.id });
    this.name = data?.name;
    this.level = data?.level;
    this.type = data?.type;
    this.description = data?.description;
    this.system = data?.system;
    this.dataSource = data?.dataSource;
  }
}
