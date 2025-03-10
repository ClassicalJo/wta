import { EntitySchema } from 'typeorm';

import { withBaseSchemaColumns } from '@/main/modules/common/infrastructure/database/base.schema';
import { capitalize } from '@/shared/utils/capitalize';

import { Background } from '../../domain/background.entity';

export const BACKGROUND_ENTITY_NAME = 'background';
export const BackgroundSchema = new EntitySchema<Background>({
  name: capitalize(BACKGROUND_ENTITY_NAME),
  tableName: BACKGROUND_ENTITY_NAME,
  relations: {
    character: {
      type: 'many-to-one',
      target: 'Character',
      onDelete: 'CASCADE',
      orphanedRowAction: 'delete',
      joinColumn: {
        name: 'characterId',
      },
    },
  },
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
  }),
});
