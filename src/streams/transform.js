import { Transform } from 'node:stream';

const reverse = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.reverse() + '\n');
    },
});

const transform = async () => {
    process.stdin.resume();
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();