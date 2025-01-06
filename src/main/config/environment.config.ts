import { ENVIRONMENT } from './environment.enum';

function setEnvironment(): ENVIRONMENT {
  switch (process.env.NODE_ENV) {
    case 'production': {
      return ENVIRONMENT.PRODUCTION;
    }
    case 'development': {
      return ENVIRONMENT.DEVELOPMENT;
    }
    default: {
      throw new Error('No environment found for ' + process.env.NODE_ENV);
    }
  }
}

export const environment = setEnvironment();
