import { EntitySchema } from 'typeorm';

import { withBaseSchemaColumns } from '@/main/modules/common/infrastructure/database/base.schema';
import { capitalize } from '@/shared/utils/capitalize';

import { RitualType } from '../../domain/ritual-type.enum';
import { Ritual } from '../../domain/ritual.entity';

export const RITUAL_ENTITY_NAME = 'ritual';
export const RitualSchema = new EntitySchema<Ritual>({
  name: capitalize(RITUAL_ENTITY_NAME),
  tableName: RITUAL_ENTITY_NAME,
  columns: withBaseSchemaColumns({
    name: {
      type: String,
      nullable: true,
    },
    level: {
      type: Number,
      nullable: true,
    },
    type: {
      type: String,
      enum: RitualType,
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
    dataSource: {
      type: String,
      nullable: true,
    },
  }),
});
