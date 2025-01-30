const array = [1,2,3,4,5]
console.log(array.flat())

const array2 = [1,[2,3],[4,5]]
console.log(array2.flat())//outputs [ 1, 2, 3, 4, 5 ]

const array3 = [1,[2,3,[4,5]]]
console.log(array3.flat()) // outputs [ 1, 2, 3, [ 4, 5 ] ]
console.log(array3.flat(2)) //outputs [ 1, 2, 3, 4, 5 ]
console.log(array3.flat(50)) //outputs [ 1, 2, 3, 4, 5 ]

const entries = ['bob', 'sally',,,,,,,,,,,"cindy"]
console.log(entries.flat()) //returns [ 'bob', 'sally', 'cindy' ]

const userEmail = '         eddytheeagle@gmail.com'
const userEmail2 = 'jonnydangerous@gmail.com             '
console.log(userEmail.trimStart()) // eddytheeagle@gmail.com
console.log(userEmail2.trimEnd()) // jonnydangerous@gmail.com

const UserProfiles = [['commanderTom', 23],["derekZlander", 40], ["hanzel", 21]]
console.log(Object.fromEntries(UserProfiles)) // returns the array as an object
// console.log(Object.entries(obj)) //returns an array from the object

// try {
//     bob +"hi"
// } catch {
//     console.log("you done goofed")
// }
