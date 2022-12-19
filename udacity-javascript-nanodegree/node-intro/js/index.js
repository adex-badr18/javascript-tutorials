const util = require('../utilities/util1');
const { lgNum, cut3 } = require('../utilities/util2');

let numArray = [1, 2, 3, 4, 5];
let wordArray = ['bread', 'butter', 'snacks', 'fried egg', 'fruits'];

console.log(`Sum of numbers in the array is ${util.sum(numArray)}`);
console.log(`Concatenating [${numArray}] and [${wordArray}] gives [${util.concat(numArray, wordArray)}]`);

console.log(`The largest number in the array is ${lgNum(numArray)}`);
console.log(`Removing the 3rd element in [${wordArray}] results to [${cut3(wordArray)}]`);
