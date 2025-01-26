import { EntitySchema } from 'typeorm';

import { withBaseSchemaColumns } from '@/main/modules/common/infrastructure/database/base.schema';
import { capitalize } from '@/shared/utils/capitalize';

import { Fight } from '../../domain/fight.entity';

export const FIGHT_ENTITY_NAME = 'fight';
export const FightSchema = new EntitySchema<Fight>({
  name: capitalize(FIGHT_ENTITY_NAME),
  target: Fight,
  tableName: FIGHT_ENTITY_NAME,
  relations: {
    groupA: {
      type: 'many-to-many',
      joinTable: true,
      target: 'Character',
      eager: true,
    },
    groupB: {
      type: 'many-to-many',
      joinTable: true,
      target: 'Character',
      eager: true,
    },
  },
  columns: withBaseSchemaColumns({
    name: {
      type: String,
      nullable: true,
    },
    description: {
      type: String,
      nullable: true,
    },
    times: {
      type: Number,
      default: 0,
      nullable: true,
    },
  }),
});
