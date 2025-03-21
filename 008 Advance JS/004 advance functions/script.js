const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

//Closures - a function ran, the function executed. It's never going to execute again. 
//But it's going to remember that there are references to those variables. 
// so the child scope always has access to the parent scope. 

//child has access to parent, parent does not have access to children. 

//Currying
const multiply = (a,b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);
// console shows "(b) => a * b"
curriedMultiply(3)(4);
//returns 12
const multiplyBy5 = curriedMultiply(5);

//Compose 
const compose = (f,g) => (a) => f(g(a))

const sum = (num) => + 1;

compose(sum, sum)(5);