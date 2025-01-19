import { BaseEntity } from '../../common/domain/base.entity';
import { GiftSource } from './gift-source.enum';

export class Gift extends BaseEntity {
  name?: string;
  description?: string;
  system?: string;
  level?: number;
  giftSource?: GiftSource[];
  dataSource?: string;
  constructor(data?: {
    id?: number;
    name?: string;
    description?: string;
    system?: string;
    level?: number;
    giftSource?: GiftSource[];
    dataSource?: string;
  }) {
    super({ id: data?.id });
    this.name = data?.name;
    this.description = data?.description;
    this.system = data?.system;
    this.level = data?.level;
    this.giftSource = data?.giftSource;
    this.dataSource = data?.dataSource;
  }
}
