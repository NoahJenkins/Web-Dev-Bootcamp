// change everything below to the newer Javascript!

// let + const
// let a = 'test';
// const b = true;
// const c = 789;
// a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const eyeColor = person.eyeColor;


// Object properties
let a = 'test';
let b = true;
let c = 789;

const okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
let message = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age=30) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
let symb = Symbol("foo")

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }


}

const whereAmI = (username, location) => 
    username && location ? "I am not lost" : "I am totally lost!"; //an if else in an arrow function requires a Tenary operator
