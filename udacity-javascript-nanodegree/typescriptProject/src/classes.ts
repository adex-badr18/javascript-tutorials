// CLASSES

class Pupil {
    studentGrade: number;
    studentId: number;
    constructor(grade: number, id: number) {
        this.studentGrade = grade;
        this.studentId = id
    }
}

let student = new Pupil(55, 123);
console.log(student.studentGrade);
console.log();

// ACCESS MODIFIERS
/*
public - by default, all properties of a TypeScript class are public, and it's commonplace to leave off 
the modifier to denote that it's public. Public properties can be accessed outside of the class.

private - private properties can only be accessed and modified from the class itself. TypeScript 
uses the keyword private, but you can also use the # symbol now available for privatizing fields in EcmaScript. 
Remember that private properties are only private in TypeScript; there are no true private properties in 
JavaScript classes, so a private property can still be changed if you ignore the error.

protected - protected properties can be accessed by the class itself and child classes as well as parent class.
*/

class Students {
    protected studentGrade: number;
    private studentId: number;
    public constructor(grade: number, id: number) {
        this.studentGrade = grade;
        this.studentId = id;
    }
    id() {
        return this.studentId;
    }
}

class Graduate extends Students {
    studentMajor: string; // public by default
    constructor(grade: number, id: number, major: string) {
        super(grade, id);
        this.studentGrade = grade; // studentGrade is protected and will be accessible to subclasses.
        // this.studentId = id; // Error: studentID is private and only accessible to the class it was declared.
        this.studentMajor = major;
    }
}

const myGraduate = new Graduate(3, 1234, 'computer science');

console.log(myGraduate.id()); //  prints 1234
// myGraduate.studentId = 1235; // TypeScript Error: Property 'studentId' is private and only accessible within class 'Student'.
console.log(myGraduate.id()); // prints 1234