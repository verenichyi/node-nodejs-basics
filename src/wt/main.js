import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerFile = join(__dirname, 'worker.js');

const runWorker = (workerData) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerFile, { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
            if (code !== 0)
                reject(new Error(`Worker stopped with exit code ${ code }`));
        });
    });
};

const performCalculations = async () => {
    const results = [];

    for (let i = 0; i < cpus().length; i++) {
       try {
           const result = await runWorker(10 + i);
           results.push({ status: 'resolved', result });
       } catch (e) {
           results.push({ status: 'error', data: null });
       }
    }

    console.log(results);
};

await performCalculations();