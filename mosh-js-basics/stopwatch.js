// ===============STOPWATCH OBJECT==============
console.log('=================STOPWATCH OBJECT===============');
function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running) {
            throw new Error('Stopwatch has already started.');
        }
        running = true;
        startTime = new Date().getTime();
        // ...
    };
    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch has not started.')
        }
        running = false;
        endTime = new Date().getTime();
        duration = (endTime - startTime) / 1000;
        // ...
    };
    this.reset = function () {
        endTime, startTime = null;
        running = false;
        duration = 0;

    };

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });
}
