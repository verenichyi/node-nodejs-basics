import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const file = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = createReadStream(file);
    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk.toString());
    });
};

await read();