const person = {
    firstName: 'Badrudeen',
    lastName: 'Abdul-hameed',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log('First Name:', person.firstName);
console.log('Last Name:', person.firstName);
console.log('Full Name:', person.fullName);
console.log(typeof person.fullName);
person.fullName = 'Fareedah Shafiee';
console.log('New Full Name:', person.fullName);
console.log(typeof person.fullName);