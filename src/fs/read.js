import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readFile } from 'node:fs/promises';
import { checkExistence } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const isFileExist = await checkExistence(file, 'file');

    if (!isFileExist) {
        throw new Error('FS operation failed');
    }

    const content = await readFile(file, 'utf-8');
    console.log(content);
};

await read();