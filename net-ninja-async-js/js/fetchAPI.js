// fetch API

fetch('./todos/abdul.json').then(response => {
    console.log('Resolved:', response.status);
    return response.json();
}).then(data => {
    console.log('Resolved 1:', data);
}).catch(err => {
    console.log('Rejected:', err);
});