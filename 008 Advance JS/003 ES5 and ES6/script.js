// const player = "bobby"
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true; // This is a new variable scoped within the if block
//     console.log(wizardLevel) // This logs 'true' because it's the local variable inside the block
// }

// console.log(wizardLevel) // This logs 'false' because the outer wizardLevel remains unchanged

//var is a variable with global scope
//let is a local variable, the scope is only available in the bloc that it was defined
// const create a variable that is immutable, you cannot change it. However, if the variable holds an object or array, the contents (properties or elements) can still be modified — it's the reference to the object that can't change.

const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// template strings
const name = "George"
const words = `Hell0 ${name}, how are you doing today?`

//default agurument
function greet(name="", age ="30", pet='cat') {
    return `Hello ${name} you seem to be ${age-10}. What a lovely day today`
}

console.log(greet());  // "Hello  you seem to be 20. What a lovely day today"
console.log(greet("Alice", 40, "dog"));  // "Hello Alice you seem to be 30. What a lovely day today"
console.log(greet("Bob", null));  // "Hello Bob you seem to be NaN. What a lovely day today"

//symbol

let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');

// arrow functions
function add(a, b) {
    return a + b;
};

const add2 = (a, b) => a + b;