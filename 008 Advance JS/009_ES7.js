
console.log('Hello'.includes("o"));
//returns true

const pets = ["cat",'dog',"pet"];
console.log(pets.includes("dog"));

const sqaure = (x) => x**2;
console.log(sqaure(2));

const cube = (y) =>y**3;
console.log(cube(5));

// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons1.includes("John"))


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
const checkJohn = (array, name) => {
    if (array.includes(name)){
        return name;
    }
    else {
        console.log(`sorry, the name ${name} is not in the list`)
    }
}
console.log(checkJohn(dragons2,"John"))


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const powerOfOneHundred = (x) => x**100;
console.log(powerOfOneHundred(5))


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(powerOfOneHundred(10000))
// returns Infinity

