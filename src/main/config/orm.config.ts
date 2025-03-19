import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import { schemas as entities } from '../modules/app.schema';
import { environment } from './environment.config';
import { ENVIRONMENT } from './environment.enum';

const isDevelopment = process.env.NODE_ENV === 'development';

const resourcesPath = isDevelopment
  ? 'resources'
  : path.join(process.resourcesPath, 'resources');

const testId = `test-${Date.now()}-${Math.random().toString(36).slice(0, 8)}.db`;
const testPath = isDevelopment
  ? path.join('data', 'tests', testId)
  : path.join(process.resourcesPath, 'tests', testId);

const DEVELOPMENT: DataSourceOptions = {
  type: 'sqlite',
  namingStrategy: new SnakeNamingStrategy(),
  database: 'wta.dev.db',
  synchronize: true,
  logging: true,
  subscribers: [],
  entities,
};

const PRODUCTION: DataSourceOptions = {
  type: 'sqlite',
  namingStrategy: new SnakeNamingStrategy(),
  database: 'wta.db',
  synchronize: false,
  logging: false,
  subscribers: [],
  entities,
  migrations: [path.join(resourcesPath, 'data', 'migrations/*.js')],
};

const TESTING: DataSourceOptions = {
  type: 'sqlite',
  database: testPath,
  synchronize: true,
  entities,
};

export default (() => {
  switch (environment) {
    case ENVIRONMENT.TESTING:
      return new DataSource(TESTING);
    case ENVIRONMENT.PRODUCTION:
      return new DataSource(PRODUCTION);
    case ENVIRONMENT.DEVELOPMENT:
    default:
      return new DataSource(DEVELOPMENT);
  }
})();
