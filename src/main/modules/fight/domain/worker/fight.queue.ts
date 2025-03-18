import os from 'os';

import { createWorker } from './fight.worker';

export async function processQueue(
  tasks: number,
  data: unknown,
  updateStatus: (e: number) => void,
): Promise<string> {
  const MAX_CONCURRENT_WORKERS = os.cpus().length;
  const activeWorkers: Promise<unknown>[] = [];
  const taskQueue = Array.from({ length: tasks }, (_, i) => i + 1);
  let completedTasks = 0;
  let reports = '';
  while (taskQueue.length > 0) {
    if (activeWorkers.length < MAX_CONCURRENT_WORKERS) {
      const task = taskQueue.shift();
      console.log(`Starting worker for task ${task}`);

      const workerPromise = createWorker(
        './src/main/modules/fight/domain/worker/fight.task.ts',
        data,
      ).then((result: string) => {
        reports += result;
        completedTasks++;
        updateStatus(completedTasks);
        activeWorkers.splice(activeWorkers.indexOf(workerPromise), 1);
      });

      activeWorkers.push(workerPromise);
    }

    await Promise.race(activeWorkers);
  }
  return reports;
}
