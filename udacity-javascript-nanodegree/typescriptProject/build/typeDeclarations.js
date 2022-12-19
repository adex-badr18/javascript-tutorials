"use strict";
// string declarations
let firstName;
firstName = 'Badrudeen';
console.log(firstName);
const day = 'Monday';
console.log(day);
// number declarations
let age;
age = 72;
console.log(age);
let point;
point = 4.33;
console.log(point);
// boolean declarations
let isAdmin = true;
isAdmin = false;
console.log(isAdmin);
// array declaration with only one type
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
const arrDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(arrDays);
// array declaration with more than one type
let arr2 = ['one', 2, 'three', 4];
console.log(arr2);
// function declarations
function square(num) {
    return num * num;
}
console.log(square(5));
// Arrow function declarations
let changeCase = (sentence) => {
    return sentence.toUpperCase();
};
let statement = 'I am learning TypeScript';
console.log(changeCase(statement));
// tuple declarations
let ourTuple = ['five', 6, 7, 'eight'];
console.log(ourTuple);
// Numeric enum without initialisation, first item is initialised to 0.
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["South"] = 1] = "South";
    CardinalDirections[CardinalDirections["East"] = 2] = "East";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let currentDirection = CardinalDirections.North;
console.log(currentDirection);
// Numeric enums with full initialisation
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
// Numeric enums with first item initialised
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log('Saturday:', Days.Saturday);
// String enum
var StringCardinalDirections;
(function (StringCardinalDirections) {
    StringCardinalDirections["North"] = "North";
    StringCardinalDirections["South"] = "South";
    StringCardinalDirections["East"] = "East";
    StringCardinalDirections["West"] = "West";
})(StringCardinalDirections || (StringCardinalDirections = {}));
console.log(StringCardinalDirections.East);
