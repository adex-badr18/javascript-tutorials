process.on('beforeExit', () => console.log("Print Fifth"));

setImmediate(() => {
    console.log("Print Third");
}, 0);

process.nextTick(() => {
    console.log('Print Second');
});

console.log('Print First');

setTimeout(() => {
    console.log("Print Forth");
}, 500);

let time = 0;
let timer = setInterval(() => {
    time += 2;
    console.log(time, 'seconds has passed');
    if (time > 10) {
        clearInterval(timer);
    }
}, 2000);