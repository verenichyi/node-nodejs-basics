import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rename as renameFile } from 'node:fs/promises';
import { checkExistence } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const wrongFilePath = join(__dirname, 'files', 'wrongFilename.txt');
const properFilePath = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
    const isWrongFileExist = await checkExistence(wrongFilePath, 'file');
    const isProperFileExist = await checkExistence(properFilePath, 'file');

    if (!isWrongFileExist || isProperFileExist) {
        throw new Error('FS operation failed');
    }

    await renameFile(wrongFilePath, properFilePath)
};

await rename();