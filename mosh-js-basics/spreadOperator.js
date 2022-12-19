// Spread operator on Arrays
console.log('------------Spread operator on Arrays------------');
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = [...first, ...second, 7, 8, 9];
console.log('first', first);
console.log('second', second);
console.log('combined', combined);
console.log();
console.log('--------Cloning an array--------');
clone = [...combined];
console.log('clone', clone);
console.log();

// Spread Operator on Objects
console.log('---------Spread Operator on Objects-----------');
const fullName = { firstName: 'Badrudeen', lastName: 'Abdul-hameed' };
const job = { jobTitle: 'Software Developer', yearOfExperience: 3 };
const person = { ...fullName, ...job, highestDegree: 'Masters' };
console.log(`person object firstName: ${person.firstName}`);

console.log();
console.log('-------Cloning an Object-------');
anotherPerson = { ...person, firstName: 'Mustopha', jobTitle: 'Software Engineer' };
console.log(anotherPerson.firstName); // overrides the firstName in person object.
console.log(anotherPerson.jobTitle); // overrides the jobTitle in person object.
