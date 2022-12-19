import Student, { Teacher } from './teacher.js';

const teacher = new Teacher('Mustopha', 'MSc');
console.log('Teacher\'s Name', teacher.name);
console.log('Teacher\'s Degree', teacher.degree);
teacher.walk();
teacher.teach();
console.log()
const student = new Student('Mustopha', 8);
console.log('Student\'s Name:', student.name);
console.log('Student\'s grade:', student.grade);
student.walk();
student.learn();

// Default import => import ... from ''
// Named import => import { ... } from ''