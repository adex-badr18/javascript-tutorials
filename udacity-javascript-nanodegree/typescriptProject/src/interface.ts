// Interface defines a blueprint or shape for creating objects.

interface Student {
    name: string,
    age: number,
    enrolled: boolean
};

interface Teacher extends Student { // extends Student
    phone?: (string | number) // optional phone property
}; 
let myTeacher: Teacher = {
    name: 'Aliyu Isyaku',
    age: 49,
    enrolled: false,
    phone: '+2348090908080'
}

let myStudent: Student = {
    name: 'Ahmad Musa',
    age: 43,
    enrolled: false
};

console.log(myStudent.name);

// Extending interfaces
interface Undergrad extends Student {
    major: string,
    readonly id: number // readonly property
};

let myUndergrad: Undergrad = {
    name: 'Zainab Alli',
    age: 32,
    enrolled: true,
    major: 'Software Engineering',
    id: 11264
};

let showUndergrad = (student: Undergrad)=> {
    return [student.name, student.id, typeof student];
};

console.log(`myUndergrad: ${showUndergrad(myUndergrad)}`);


// Duck typing: Two objects with the same property list can be called with a single function
/*
TypeScript uses duck typing for interfaces, meaning that even though you may say a function takes 
in an argument of interface A, if interface B has the same properties of A, the function will also accept B. 
Interface A is the duck, and Interface B walks and quacks like a duck, so we'll accept it as a duck too.
*/
let showPerson = (person: Student)=> {
    return [person.name, person.age];
};
console.log(`myTeacher: ${showPerson(myTeacher)}`);
