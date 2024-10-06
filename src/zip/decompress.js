import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGunzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToDecompress = join(__dirname, 'files', 'archive.gz');
const decompressedFile = join(__dirname, 'files', 'fileToCompresss.txt');

const decompress = async () => {
    const decompressStream = createGunzip();
    const readableStream = createReadStream(fileToDecompress);
    const writableStream = createWriteStream(decompressedFile);

    readableStream.pipe(decompressStream).pipe(writableStream);
};

await decompress();