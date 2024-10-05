import { writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkExistence } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
    const isExist = await checkExistence(filePath, 'file');

    if (isExist) {
        throw new Error('FS operation failed');
    }

    await writeFile(filePath, content);
};

await create();