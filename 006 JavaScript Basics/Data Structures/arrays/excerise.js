// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
array.splice(0, 1);
console.log(array);
// 2. Sort the array in order.
array.sort();
console.log(array)
// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);
// 4. Remove "Apples" from the array.
array.splice(0, 1);
console.log(array);
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
array.reverse();
console.log(array);
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// using this array,
var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1])