const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('Could not fetch data.', undefined);
        }
    });

    request.open('GET', resource);
    request.send();
}

// NOTE: Nested callback function is called "Callback Hell". Callback hell is noisy and can mess up code structure.
// Nested Callbacks is done to ensure that an operation is completed before the commencement of another i.e. 
// Sequential execution of code, ignoring asynchronous nature.

getTodos('./todos/abdul.json', (err, data) => {
    console.log(data);
    getTodos('./todos/badru.json', (err, data) => {
        console.log(data);
        getTodos('./todos/abdul.json', (err, data) => {
            console.log(data);
        });
    });
});