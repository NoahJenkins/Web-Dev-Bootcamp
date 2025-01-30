const basket = ['apples', "oranges", 'grapes']
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000

}
//1
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);  // Use bracket notation to access array items
}

//2
basket.forEach(item => {
    console.log(item)
})

//3 for of 
//Iterating -arrays, strings
for (item of basket) {
    console.log(item)
}

//4 for in - loop over and see object properties
//enumerating 
for (item in detailedBasket) {
    console.log(item)
}