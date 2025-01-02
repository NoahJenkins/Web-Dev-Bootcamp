function sayHello() {
    console.log('Hello!');
}

sayHello();

// Anonymous function is a function without a name, in this case it is assigned to a variable
var sayBye = function() {
    console.log('Bye!');
}

sayBye();

function sing(song) {
    console.log(song);
}

sing('Laaa deee daaa');
sing("Good morning!");
sing("backstreet's back alright");

function multiply(a,b) {
    return a * b;   
}

// parameters vs arguments
// parameters are used when defining a function, in the above example a and b are parameters
// arguments are used when calling a function, in the above example 5 and 10 are arguments