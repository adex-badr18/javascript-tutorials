// async and await

const getTodos = async () => {
    const abdul = await (await fetch('./todos/abdul.json')).json();
    const badru = await (await fetch('./todos/badru.json')).json();
    const rufaidah = await (await fetch('./todos/rufaidah.json')).json();
    // const data = await response.json();

    return { abdul, badru, rufaidah };
};

console.log(1);
console.log(2);
getTodos()
    .then(data => {
        let { abdul, badru, rufaidah } = data;
        console.log(abdul);
        console.log(badru);
        console.log(rufaidah);
    })
    .catch(err => console.log('Rejected:', err));

console.log(3);
console.log(4);