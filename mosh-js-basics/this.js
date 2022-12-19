// this keyword in a method that belongs to an object refers to the object.
// this keyword in a global function refers to the global object i.e. window object or global object in node.

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    },
    showTagsWindowFunction() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();
console.log();
video.showTagsWindowFunction();

// ========BINDING this==========
console.log();
console.log('========BINDING this==========');

const person = {
    name: "Badrudeen",
    walk() {
        console.log(this);
    }
};

person.walk();

const walk = person.walk.bind(person);
walk();