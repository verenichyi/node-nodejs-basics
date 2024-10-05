import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const compressStream = createGzip();
    const readableStream = createReadStream(fileToCompress);
    const writableStream = createWriteStream(compressedFile);

    readableStream.pipe(compressStream).pipe(writableStream);
};

await compress();