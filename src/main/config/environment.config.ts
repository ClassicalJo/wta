import { config } from 'dotenv';
import path from 'path';

import { ENVIRONMENT } from './environment.enum';

const isDevelopment = process.env.NODE_ENV === 'development';
const envPath = isDevelopment
  ? 'resources/data/.env'
  : path.join(process.resourcesPath, 'resources', 'data', '.env');

config({ path: envPath });

export const environment = (function setEnvironment(): ENVIRONMENT {
  if (process.env.APP_MODE === 'automated_testing') {
    return ENVIRONMENT.TESTING;
  } else if (process.env.APP_MODE === 'production') {
    return ENVIRONMENT.PRODUCTION;
  } else {
    return ENVIRONMENT.DEVELOPMENT;
  }
})();
