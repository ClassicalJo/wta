import path from 'path';
import { Worker } from 'worker_threads';

import { environment } from '@/main/config/environment.config';

export function createWorker(scriptPath: string, workerData: unknown = {}) {
  return new Promise((resolve, reject) => {
    let worker: Worker;
    if (environment === 'production') {
      worker = new Worker('./resources/resources/data/worker.js', {
        workerData,
      });
    } else {
      worker = new Worker(scriptPath, {
        workerData,
        execArgv: [
          '-r',
          'ts-node/register',
          '--require',
          'tsconfig-paths/register',
        ],
        env: {
          TS_NODE_PROJECT: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
        },
      });
    }
    worker.on('message', (message) => {
      console.log('Response received from worker');
      resolve(message);
    });

    worker.on('error', (error) => {
      console.error('Worker error:', error);
      reject(error);
    });

    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

export default createWorker;
