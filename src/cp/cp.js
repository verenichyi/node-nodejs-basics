import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const script = join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const child = spawn('node', [script, ...args]);

    // process.stdin - rs for parent process, child.stdin - ws for child process
    process.stdin.pipe(child.stdin);

    // child.stdout - rs for child process
    child.stdout.on('data', (data)=>{
        console.log(data.toString());
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['--arg1', '--arg2', '--arg3']);
