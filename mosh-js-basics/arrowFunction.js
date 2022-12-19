const squareFunction = function (number) {
    return number * number;
};
console.log('SquareFunction:', squareFunction(5));
console.log();
const squareArrowFunction = number => number * number;
console.log('squareArrowFunction:', squareArrowFunction(5));

// display active jobs
const jobs = [
    { id: 1, title: 'Software Engineer', isActive: true },
    { id: 2, title: 'DevOp Engineer', isActive: true },
    { id: 3, title: 'Data Analyst', isActive: false }
];

const activeJobs = jobs.filter(job => job.isActive);
const activeJobTitles = activeJobs.map(job => job.title);
console.log(activeJobs);
console.log(activeJobTitles);
// .....loop over the job titles.....
console.log('.....loop over the job titles.....');
activeJobTitles.forEach(title => console.log(title));

// -------------ARROW FUNCTION AND THIS KEYWORD----------------------
console.log('-------------ARROW FUNCTION AND THIS KEYWORD----------------------');
const person = {
    talk() { // this returns the window object bcos this is called in a function that is outside an object.
        setTimeout(function () {
            console.log('this: window object', this);
        }, 1000);
    },
    walk() { // this returns the person object.
        var self = this;
        setTimeout(function () {
            console.log('this of self', self);
        }, 1000);
    },
    draw() { // this returns the person object. Arrow functions inherit the this object in their parent element.
        setTimeout(() => {
            console.log('this of arrow function', this);
        }, 1000);
    }
};

person.talk();
person.walk();
person.draw();