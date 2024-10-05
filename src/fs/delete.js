import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rm } from 'node:fs/promises';
import { checkExistence } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRemove = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
    const isFileExist = await checkExistence(fileToRemove, 'file');

    if (!isFileExist) {
        throw new Error('FS operation failed');
    }

    await rm(fileToRemove);
};

await remove();