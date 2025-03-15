import { config } from 'dotenv';
import { app } from 'electron';
import path from 'path';

import { ENVIRONMENT } from './environment.enum';

config({ path: path.join(process.resourcesPath, '/resources/data/.env') });

export const environment = (function setEnvironment(): ENVIRONMENT {
  if (process.env.APP_MODE === 'automated_testing') {
    return ENVIRONMENT.TESTING;
  } else if (app?.isPackaged || process.env.APP_MODE === 'production') {
    return ENVIRONMENT.PRODUCTION;
  } else {
    return ENVIRONMENT.DEVELOPMENT;
  }
})();
