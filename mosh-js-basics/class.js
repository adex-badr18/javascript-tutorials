class Person {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walking...');
    }
}

// create an instance of the Person class.
const person = new Person('Badrudeen');
console.log(person.name);
person.walk();

// ----------Inheritance-------------
console.log('----------Inheritance-------------');
class Teacher extends Person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    teach() {
        console.log('Teaching...');
    }
}

// create an instance of the Teacher class.
const teacher = new Teacher('Mustopha', 'MSc');
console.log('Teacher\'s Name', teacher.name);
console.log('Teacher\'s Degree', teacher.degree);
teacher.walk();
teacher.teach();