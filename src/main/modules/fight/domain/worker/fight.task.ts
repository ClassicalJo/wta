import { isMainThread, parentPort, workerData } from 'worker_threads';

import { Director } from '../director/director.domain';
import { logger } from '../director/logger.domain';
import { validateFight } from './validate-fight.task';

if (!isMainThread) {
  const [fight, error] = validateFight(workerData);
  if (error) {
    Object.values(error).forEach((value) => {
      logger.log(value);
    });
    parentPort.postMessage(logger.logs);
  } else {
    logger.log('Starting fight!');
    logger.log('///////////////');
    logger.log(JSON.stringify(fight, null, 2));

    new Director(fight);

    parentPort.postMessage(logger.logs);
  }
}
