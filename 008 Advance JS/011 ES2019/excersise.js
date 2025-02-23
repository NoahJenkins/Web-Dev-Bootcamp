// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
console.log(array.flat(2)); //[ 1, 2, 3, [ 4 ], [ 5 ] ]


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const newGreeting = greeting.map(arr => arr.join(' ')); //map itereates over each subarray in greeting, and join(' ') joins the elements of each sub array into a single string with a space between them
console.log(newGreeting);



//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
console.log(newGreeting.join(" ")); //Hello young grasshopper! you are learning fast!



//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(50)); //[3]



//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const newEmail = (input) => input.trim();
console.log(newEmail(userEmail3));

//NOTE

// function trimBothEnds(str) {
//     return str.trimStart().trimEnd();
//   }
  
//   const userEmail = '         eddytheeagle@gmail.com         ';
//   console.log(trimBothEnds(userEmail));  // 'eddytheeagle@gmail.com'

//you can call multiple methods by calling them one after the other aas seen in line 34
  



//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
usersArray = (input) => Object.entries(input)
console.log(usersArray(users))

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
usersArray2 = (input) => 
    Object.entries(input).map(([user, id]) => [user, id*2])

console.log(usersArray2(users))


//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
console.log(Object.fromEntries(usersArray2(users)))