// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = 'ðŸ¢';
let rabbit = 'ðŸ‡';

// it should look like this:
'     ||<- Start line'
'       ðŸ¢'
'       ðŸ‡'

// when you do:
turtle.padStart(8)
rabbit.padStart(8)
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '='); //returns ðŸ¢=====
console.log(turtle);


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj)  // Result: [['my', 'name'], ['is', 'Rudolf'], ['the', 'raindeer']]

// Now, you use the map() function to iterate over each of these key-value pairs. 
// For each pair, you call .join(" ") to combine the key and the value into a 
// single string, separated by a space:

Object.entries(obj).map(value => value.join(" "))
// Result: ['my name', 'is Rudolf', 'the raindeer']

// After mapping over the entries, you end up with an array of strings. You now use .join(' ')
//  on the resulting array to join these strings into one string, with each string separated 
// by a single space:

['my name', 'is Rudolf', 'the raindeer'].join(' ')
// Result: 'my name is Rudolf the raindeer'



console.log(Object.entries(obj).map(value => value.join(" ")).join(' '))