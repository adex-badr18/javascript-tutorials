// string declarations
let firstName: string;
firstName = 'Badrudeen';
console.log(firstName);

const day: string = 'Monday';
console.log(day);

// number declarations
let age: number;
age = 72;
console.log(age);

let point: number;
point = 4.33;
console.log(point);

// boolean declarations
let isAdmin: boolean = true;
isAdmin = false;
console.log(isAdmin);

// array declaration with only one type
let arr1: number[] = [1, 2, 3, 4, 5];
console.log(arr1);

const arrDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(arrDays);

// array declaration with more than one type
let arr2: (number|string)[] = ['one', 2, 'three', 4];
console.log(arr2);

// function declarations
function square( num: number): number {
    return num * num;
}
console.log(square(5));

// Arrow function declarations
let changeCase = (sentence: string): string => {
    return sentence.toUpperCase();
};

let statement: string = 'I am learning TypeScript';
console.log(changeCase(statement));

// tuple declarations
let ourTuple: [string, number, number, string] = ['five', 6, 7, 'eight'];
console.log(ourTuple);

// Numeric enum without initialisation, first item is initialised to 0.
enum CardinalDirections {
    North,
    South,
    East,
    West
}

let currentDirection: number = CardinalDirections.North;
console.log(currentDirection);

// Numeric enums with full initialisation
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);

// Numeric enums with first item initialised
enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log('Saturday:', Days.Saturday);

// String enum
enum StringCardinalDirections {
    North = 'North',
    South = 'South',
    East = 'East',
    West = 'West'
}
console.log(StringCardinalDirections.East);