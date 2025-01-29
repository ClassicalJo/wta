import { isMainThread, parentPort, workerData } from 'worker_threads';

import { Director } from '../director/director.domain';
import { validateFight } from './validate-fight.task';

// Example worker script (worker.ts)
if (!isMainThread) {
  const fight = validateFight(workerData);
  if (!fight) {
    parentPort.postMessage('error');
  } else {
    const start = performance.now();
    new Director(fight);

    parentPort.postMessage(performance.now() - start);
  }
}
