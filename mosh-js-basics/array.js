console.log('=====================ARRAY========================');
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors.length);
console.log(selectedColors[1]);
selectedColors[2] = 'green';

console.log("");
console.log("Looping through the array...");
for (let i in selectedColors) {
    console.log(selectedColors[i]);
}

console.log();
for (let color of selectedColors)
    console.log(color);

console.log();
console.log('=====================ARRAY FILTER========================');
const numbers = [1, -1, 2, 3];
const positiveNumbers = numbers.filter(n => n >= 0);
console.log(positiveNumbers);

colorsWithMoreThan3Letters = selectedColors.filter(color => color.length > 3);
console.log();
console.log(colorsWithMoreThan3Letters);

console.log();
console.log('=====================ARRAY MAP========================');
// map to an html markup
const items = positiveNumbers.map(n => `<li>${n}</li>`);
console.log(items.join('\n'));

const html = `<ul>
\t${items.join('\n\t')}
</ul>`;

console.log();
console.log(html);

// Mapping items in an array to an object.
console.log();
const mapToObject = positiveNumbers.map(n => ({ value: n }))

console.log(mapToObject);

// Chaining multiple methods
console.log();
console.log('.....Chaining Multiple methods.....');
const chainingMethods = positiveNumbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value)
    .forEach(v => console.log(v));

// console.log(chainingMethods);

console.log();
console.log('=====================ARRAY REDUCE========================');
const cartPrices = [20, 15, 5, 33];
// sum of an array using loop
let sumForLoop = 0;
for (price of cartPrices)
    sumForLoop += price;

console.log('Sum using for loop:', sumForLoop);

// sum using reduce()
let sumReduce = cartPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
/* NOTE: If initial value of accumulator is not supplied as the 2nd argument to reduce(), 
 accummulator will be initialised to the 1st item in the array. */
console.log('Sum using reduce():', sumReduce);