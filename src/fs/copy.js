import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkExistence, copyDirectory } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const src = join(__dirname, 'files');
const dest = join(__dirname, 'files_copy');

const copy = async () => {
    const isSrcExist = await checkExistence(src, 'directory');
    const isDestExist = await checkExistence(dest, 'directory');

    if (!isSrcExist || isDestExist) {
        throw new Error('FS operation failed');
    }

    await copyDirectory(src, dest);
};

await copy();
