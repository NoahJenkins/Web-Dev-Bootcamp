//ES2020

//BigInt

typeof BigInt
//BigInt stands for a big integer, add the letter n to the end of a number.
//it is for any numbers larger than 9007199254740991


//Optional Chaing
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // Output: "Adult"

// If any property before ?. is null or undefined, it stops and returns undefined instead of throwing an error.


// Nullish Coalescing
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"
// Unlike ||, ?? only checks for null or undefined, not falsy values like 0 or "".
