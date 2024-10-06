import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');


const calculateHash = async () => {
    const file = await readFile(filePath);
    const hash = createHash('sha256').update(file).digest('hex');
    console.log(hash);
};

await calculateHash();