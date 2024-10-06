import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createWriteStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
    const writableStream = createWriteStream(file);
    process.stdin.resume();
    process.stdin.pipe(writableStream)
};

await write();