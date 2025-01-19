import { EntitySchema } from 'typeorm';

import { withBaseSchemaColumns } from '@/main/modules/common/infrastructure/database/base.schema';
import { capitalize } from '@/shared/utils/capitalize';

import { GiftSource } from '../../domain/gift-source.enum';
import { Gift } from '../../domain/gift.entity';

export const GIFT_ENTITY_NAME = 'gift';
export const GiftSchema = new EntitySchema<Gift>({
  name: capitalize(GIFT_ENTITY_NAME),
  target: Gift,
  tableName: GIFT_ENTITY_NAME,
  columns: withBaseSchemaColumns({
    name: {
      type: String,
      nullable: true,
    },
    level: {
      type: Number,
      nullable: true,
    },
    description: {
      type: String,
      nullable: true,
    },
    system: {
      type: String,
      nullable: true,
    },
    giftSource: {
      type: 'simple-array',
      enum: GiftSource,
      nullable: true,
    },
    dataSource: {
      type: String,
      nullable: true,
    },
  }),
});
