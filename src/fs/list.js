import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdir } from 'node:fs/promises';
import { checkExistence } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const folder = join(__dirname, 'files');


const list = async () => {
    const isDirectoryExist = await checkExistence(folder, 'directory');

    if (!isDirectoryExist) {
        throw new Error('FS operation failed');
    }

    const entities = await readdir(folder);
    console.table(entities);
};

await list();