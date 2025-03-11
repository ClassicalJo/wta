import path from 'path';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { schemas as entities } from '../modules/app.schema';
import { environment } from './environment.config';
import { ENVIRONMENT } from './environment.enum';

const dataSource = (() => {
  switch (environment) {
    case ENVIRONMENT.PRODUCTION:
      return new DataSource({
        type: 'sqlite',
        namingStrategy: new SnakeNamingStrategy(),
        database: path.join(process.resourcesPath, '/resources/wta.db'),
        synchronize: false,
        logging: false,
        subscribers: [],
        entities,
        migrations: [
          path.join(process.resourcesPath, '/resources/data/migrations/*.js'),
        ],
      });
    case ENVIRONMENT.DEVELOPMENT:
    default:
      return new DataSource({
        type: 'sqlite',
        namingStrategy: new SnakeNamingStrategy(),
        database: 'wta.db',
        synchronize: true,
        logging: true,
        subscribers: [],
        entities,
      });
  }
})();

export default dataSource;
