import { Person } from './person.js';

export class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('Teaching...');
    }
}


export default class Student extends Person {
    constructor(name, grade) {
        super(name);
        this.grade = grade;
    }

    learn() {
        console.log('learning...');
    }
}