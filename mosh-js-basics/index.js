//Single-line Comment
console.log('Hello JavaScript!')
// alert('Hello JavaScript')

// function
function greet(name) {
       console.log('Hello', name)
}

greet('Badru')

function square(number) {
       return number * number
}

let val = square(2)
console.log(val)
console.log(typeof val)
console.log(typeof square)

// procedural programming
let baseSalary = 30000
let overtime = 10
let rate = 20

function getWage(baseSalary, overtime, rate) {
       return baseSalary + (overtime * rate)
}

console.log('Wage in Procedural:', getWage(baseSalary, overtime, rate))
// End of Procedural



