import { isMainThread, parentPort, workerData } from 'worker_threads';

import { Director } from '../director/director.domain';
import { logger } from '../director/logger.domain';
import { validateFight } from './validate-fight.task';

// Example worker script (worker.ts)
if (!isMainThread) {
  const fight = validateFight(workerData);
  if (!fight) {
    parentPort.postMessage('error');
  } else {
    logger.log('Starting fight!');
    logger.log('///////////////');
    logger.log(JSON.stringify(fight, null, 2));

    new Director(fight);

    parentPort.postMessage(logger.logs);
  }
}
