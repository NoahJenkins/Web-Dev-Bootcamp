var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i=0; i < todos.length; i++){
todos[i] = todos[i] + "!";
}
// length is a property of the array object that returns or sets the number of elements in that array. in this case, the length of the todos array is 5.
// i is a variable that is used to store the number of iterations that the loop has gone through. i is set to 0 at the start of the loop.
// i < todos.length is the condition that the loop will run until i is less than the length of the todos array.
// i++ is the increment that will be applied to i after each iteration of the loop. i++ is the same as i = i + 1.
// todos[i] = todos[i] + "!"; is the code that will be run on each iteration of the loop. todos[i] is the current element in the todos array that the loop is on. todos[i] + "!" is concatenating an exclamation point to the end of the current element in the todos array. The result of this concatenation is then stored back in the current element in the todos array.

var todosLength = todos.length;
for (var i=0; i < todosLength; i++){
    todos.pop();
}

// todos.pop(); is a method of the array object that removes the last element from the array. In this case, the last element of the todos array is removed on each iteration of the loop.

todos.forEach(function(todo, i){
    console.log(todo, i);
});

// forEach is a method of the array object that takes a function as an argument and applies that function to each element in the array. In this case, the function takes two arguments, todo and i. todo is the current element in the array, and i is the index of that element in the array. The function logs the current element and index to the console on each iteration of the loop.
// in the expression function(todo, i), todo is the current element in the array, and i is the index of that element in the array.
// function(todo, i){console.log(todo, i);} is the function that will be applied to each element in the array. console.log(todo, i); is logging the current element and index to the console.

todos.forEach(logTodo);
/////////////////////////////////////////////////////////////
var counterOne = 0;
while (counterOne <= 10) {
    console.log(counterOne)
    counterOne++
}

var counterOne = 0;
while (counterOne <= 10) {
    console.log(counterOne)
    counterOne++
}

//#########################################

var counterTwo = 10
do {
    console.log(counterTwo)
    counterTwo--;
} while (counterTwo >0)

// The while loop checks for a condition first, then performs an action
// the do loop runs the function first, then the while checks for the condition. 
// for loop and while loop will be your most common loops. 

