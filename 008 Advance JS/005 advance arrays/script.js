const array = [1,2,10,16];
const double = []
const newArray = array.forEach(num => {double.push(num *2)});

console.log(array)
console.log(newArray);
console.log(double)

// map, 
const mapArray = array.map(num => {return num * 2});
console.log('map', mapArray)

//use map when needint to take an array, and transorom the data, resulting in a new array

// filter
const filterArray = array.filter(num => { return num > 5});
console.log('filter',filterArray)

// reduce
const reduceArray = array.reduce((accumalator, number) => {
    return accumalator + number
})
console.log("reduce",reduceArray)