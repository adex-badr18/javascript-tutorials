const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

let circleCopy = {};

// Method 1 - Cloning an Object using for loop.
for (let key in circle)
    circleCopy[key] = circle[key];

console.log('==========Cloning using for loop=======');
console.log(circleCopy);

// Method 2 - Cloning an Object using Object.assign().
circleCopy = {};
console.log('==========Cloning using Object.assign()=======');
circleCopy = Object.assign({}, circle);
console.log(circleCopy);

// Method 2 - Cloning an Object using spread operator.
circleCopy = {};
console.log('==========Cloning using spread operator=======');
circleCopy = { ...circle };
console.log(circleCopy);