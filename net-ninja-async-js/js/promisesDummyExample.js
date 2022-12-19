const getSomething = () => {
    return new Promise((resolve, reject) => {
        // some code to fetch data...
        resolve('some data');
        reject('some error');
    });
};

// Passing a callback function as the 2nd argument to then() to catch the error.
getSomething().then(data => {
    console.log(data);
}, err => {
    console.log(err);
});

// using catch() to handle the error
getSomething().then(data => {
    console.log(data);
}).catch(err => {
    console.log('using .catch():', err);
});