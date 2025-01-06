import { DataSource, EntitySchema } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { environment } from './environment.config';
import { ENVIRONMENT } from './environment.enum';

export class OrmConfig {
  dataSource: DataSource;
  constructor(public entities: EntitySchema[]) {
    this.dataSource = this.setDataSource(environment);
  }
  setDataSource(environment: ENVIRONMENT) {
    switch (environment) {
      case ENVIRONMENT.PRODUCTION: {
        return new DataSource({
          type: 'sqlite',
          namingStrategy: new SnakeNamingStrategy(),
          database: 'resources/wta.db',
          synchronize: false,
          logging: false,
          subscribers: [],
          entities: this.entities,
        });
      }
      case ENVIRONMENT.DEVELOPMENT:
      default:
        return new DataSource({
          type: 'sqlite',
          namingStrategy: new SnakeNamingStrategy(),
          database: 'wta.db',
          synchronize: true,
          logging: true,
          subscribers: [],
          entities: this.entities,
        });
    }
  }
}
