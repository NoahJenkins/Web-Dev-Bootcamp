//Evaluate these:
//#1
// [2] === [2] // false, because they are different references in memory
// {} === {} // false, because they are different references in memory

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; // object has a proptery 'a" with a value of 5
const object2 = object1; // object2 now points to the same reference as object1
const object3 = object2; // onject 3 points to the same refercne as object 2 (and object 1)
const object4 = { a: 5}; // object4 is a new object with its own separate property `a` set to 5
object1.a = 4; //object1 property "a" now has a value of 4, making object1, object2, and object 3 also 4


//#3 create two classes: an Animal class and a Mamal class. 
class Animal {
    constructor(name) {
        this.name = name;
        }
}

class Mamal extends Animal {
    constructor(name) {
        this.name = name
    }
}