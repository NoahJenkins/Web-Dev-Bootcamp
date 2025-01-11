// ternary operator
// condition ? expr1 : expr2
//check for a condition, with 2 possible expressions

function isUserValid(bool) {
    return bool;

}

var answer = isUserValid(true) ? "You may enter" : "Access Denied"

var auotomatedAnswer = "Your account number # is" + ( isUserValid(false) ? "1234" : "not available");

console.log((age >=18) ? "You are an adult!" : "You are a kid.")

// switch statement
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster"
            break;
        case "back":
            whatHappens = "you arrived home"
            break;
        case "forward":
            whatHappens = "you found a river"
            break;
        case "forward":
            whatHappens = "you run into a troll"
            break;
        default:
            whatHappens = "please enter a valid direction"

    }
    return whatHappens
}