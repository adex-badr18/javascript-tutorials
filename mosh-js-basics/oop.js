// OOP
/*
Encapsulation: groups related methods (functions) and properties (variables) together to reduce complexity and enhance reusability.
Abstraction: hides the implementation details of the object to reduce complexity and isolate the impact of changes in the code.
Inheritance: Eliminate redundant code
Polymorphism: Poly (many) morph(form). refactors ugly switch/case statements
*/
console.log('======OOP')
let employee = {  // Object literal declaration
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}

console.log(employee.baseSalary)
console.log('Wage in OOP', employee.getWage())

// Factories and Constructors: used for object declaration if the object has one or more behaviours/methods
// Factory function
console.log('=====Factory function=====')
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw')
        }
    };
}

const circle = createCircle(1)
console.log(circle)
console.log(circle.radius)

// Employee Factory function
console.log('==========Employee Factory function=========')
function employee_fact(baseSalary, overtime, rate) {
    return {
        baseSalary,
        overtime,
        rate,
        wage: function () {
            return baseSalary + (overtime * rate)
        }
    };
}
let employee1 = employee_fact(30000, 30, 20)
console.log(employee1)
console.log(employee1.wage())
console.log(employee1['rate'])
console.log(employee1['wage']())
// End of Employee factory function

// Student Factory function
console.log('==========Student Factory Function=========')
function student(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        fullName: function () {
            return firstName + ' ' + lastName
        },
    };
}
let badru = student('Badrudeen', 'Abdul-hameed', 10)
console.log(badru)
console.log(badru.age)
console.log(badru.fullName())
// End of Student Factory function

// Scores Factory function
console.log('=======Scores Factory function=======')
function scores(maths, eng, bio) {
    return {
        maths,
        eng,
        bio,
        average: function () {
            return (maths + eng + bio) / 3
        }
    };
}
let adam = scores(56, 61, 90)
console.log(adam)
console.log(adam.average())
console.log('Adam\'s maths score:', adam['maths'])
// End of Scores factory function


// Constructor function
console.log('=====CONSTRUCTOR FUNCTIONS=====')

// Circle Constructor function
console.log('=====circle constructor function=====')
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const _circle = new Circle(2)
console.log(_circle)
console.log(_circle.radius)
console.log(_circle.draw())
console.log(typeof _circle)
// End of circle constructor function

// employee constructor function
console.log('========Employee constructor function========')
function Employee(baseSalary, overtime, rate) {
    this.baseSalary = baseSalary;
    this.overtime = overtime;
    this.rate = rate;
    this.wage = function () {
        return this.baseSalary + (this.overtime * this.rate)
    }
}
let alli = new Employee(30000, 30, 20)
console.log('Alli', alli)
console.log(alli.wage())
// end of employee constructor function

// Student constructor function
console.log('========Student constructor function========')
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName;
    }
}
let musa = new Student('Musa', 'Yusuf', 20)
console.log('Musa:', musa)
console.log(musa.fullName())
// end of Student constructor function

// Scores constructor function
console.log('========Scores constructor function========')
function Scores(maths, eng, bio) {
    this.maths = maths;
    this.eng = eng;
    this.bio = bio;
    this.average = function () {
        return (this.maths + this.eng + this.bio) / 3
    }
}
let score = new Scores(50, 60, 80)
console.log('score:', score)
console.log(score.average())
// end of Scores constructor function

// Functions are objects in JavaScript
// An object can be created using the raw Function object
console.log('=======raw Function object=======')
const Scores1 = new Function('maths', 'eng', 'bio', `
       this.maths = maths;
       this.eng = eng;
       this.bio = bio;
       this.average = function () {
              return (this.maths + this.eng + this.bio) / 3
       }
`)
const score1 = new Scores1(23, 45, 51)
console.log(typeof Scores1)
console.log(score1)
console.log(score1.average())
// console.log(Scores1(23, 45, 51))

// ENUMERATE OVER AN OBJECT
console.log('============ENUMERATE OVER AN OBJECT=============')
for (let key in score) {
    if (typeof score[key] !== 'function') {
        console.log(key, score[key]);
    }
}

console.log('===get all the keys in an object listed in an array===')
const keys = Object.keys(score)
console.log(keys)

console.log('===check the existence of a property or a method in an object===')
if ('maths' in score) {
    console.log('score has maths score.')
}