const parseArgs = () => {
    const args = process.argv.slice(2);
    const vars = args.reduce((acc, cur, index) => {
        if (cur.startsWith('--')) {
            acc.push(`${cur} is ${args[index + 1]}`);
        }

        return acc;
    }, []);

    console.log(vars.join(', '));
};

parseArgs();