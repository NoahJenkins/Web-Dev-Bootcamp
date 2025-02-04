// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991


// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1//n
// these are different types of varaible, 2 integers and 1 big integer, making all 3 a big integer or removing the n in n1 to make it a normal integer would fix it. 

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

// if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
//     && will_pokemon.pikachu && will_pokemon.pikachu.friend 
//     && will_pokemon.pikachu.friend.charizard) {
//         console.log('fight!')
//     } else {
//         console.log('walk away...')
//     }

    if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight')
    } else {
        console.log('walk away....')
    }

// The ?. operator is used to safely access nested properties of an object.
// If any property in the chain is undefined or null, it stops and returns undefined instead of throwing an error.


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') //false
// The nullish coalescing operator (??) returns the right-hand operand only if the left-hand operand is null or undefined.
//Since false is not null or undefined, false is returned.

console.log(null ?? 'hellooo') //hellooo
//null is one of the nullish values (null or undefined), so ?? picks the right-hand side ('hellooo').


console.log(null || 'hellooo') //hellooo
//The logical OR operator (||) returns the first "truthy" value.
//null is falsy, so it moves to 'hellooo', which is truthy, and returns 'hellooo'.

console.log((false || null) ?? 'hellooo') //hellooo
console.log(null ?? (false || 'hellooo')) //hellooo