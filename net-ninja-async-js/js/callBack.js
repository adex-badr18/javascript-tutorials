const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Could not fetch data.', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();
}

// NOTE: All numbers are logged to the console before the result of getTodos() is logged.
// Asynchronous means "Start now finish later".
console.log(1);
console.log(2);

getTodos((err, data) => {
    console.log('Callback fired!');
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }

});

console.log(3);
console.log(4);

