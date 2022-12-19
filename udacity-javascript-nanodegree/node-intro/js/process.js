process.exitCode = 1;

process.on('beforeExit', () => {
    console.log('BeforeExit event');
});

process.on('exit', (code) => {
    console.log('exit event with code:', code);
});

console.log();
console.log('=====================================================');

console.log(process.argv);
console.log(process.env);
process.stdout.write('Hello Node');

console.log();
console.log('=====================================================');