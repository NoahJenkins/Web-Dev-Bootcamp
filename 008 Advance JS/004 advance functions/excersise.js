//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const sumFunc = (a,b) => a+b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3)
//results in 13

//Currying: What does the last line return?
const sum1 = (a, b) => a + b;
const curriedSum1 = (a) => (b) => a + b;
curriedSum(30)(1)
//results in 31

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)
//results in 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5a = (num) => num + 5;
compose(add1, add5a)(10)
//results in 16

//What are the two elements of a pure function?
// No side affects (logging to console, making api calls, etc), and the same input always producing the same output. 