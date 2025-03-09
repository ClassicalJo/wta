import { app } from 'electron';

import { ENVIRONMENT } from './environment.enum';

function setEnvironment(): ENVIRONMENT {
  if (process.env.NODE_ENV === 'automated_testing') {
    return ENVIRONMENT.TESTING;
  } else if (app.isPackaged || process.env.NODE_ENV === 'production') {
    return ENVIRONMENT.PRODUCTION;
  } else if (process.env.NODE_ENV === 'development') {
    return ENVIRONMENT.DEVELOPMENT;
  } else {
    throw new Error('No environment found for ' + process.env.NODE_ENV);
  }
}

export const environment = setEnvironment();
