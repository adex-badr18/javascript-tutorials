// async and await

const getTodos = async () => {
    const response = await fetch('./todos/sabdul.json');
    if (response.status !== 200) {
        throw new Error('Cannot fetch the data.');
    }
    const data = await response.json();

    return data;
};

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log('Rejected:', err));