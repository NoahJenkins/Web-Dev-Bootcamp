var list = ['tiger', 'cat', 'bear', 'bird'];
console.log(list[0]);

// arrays can hold any type of data
var mixedList = ['apples', 3, undefined, true, function apple() { console.log('apple'); }];

// arrays can be nested
var nestedList = [
  ['tiger', 'cat', 'bear', 'bird'],
  ['apple', 'banana', 'orange', 'pear'],
  ['apple', 'orange', 'apple', 'pear']
];

//to select cat from the list
console.log(nestedList[0][1])

//concat method
var list = ['tiger', 'cat', 'bear', 'bird'];
var list2 = ['apple', 'banana', 'orange', 'pear'];
var list3 = list.concat(list2);
console.log(list3);
// output: ['tiger', 'cat', 'bear', 'bird', 'apple', 'banana', 'orange', 'pear']