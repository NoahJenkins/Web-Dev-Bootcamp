//#1 change this function into a ternary and assign it to variable called experiencePoints
// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

function winBattle(){
    // Simulate a win or loss; true for win, false for loss
    return true; // or false
}
function experiencePoints(results){
    var results = (winBattle() ?  10 :  1 )
    return(results)
}

////////////////////////////////////////////////////////////////////////////

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");

//nothing, since the break happens before the action

//#3 return value when moveCommand("back");

// "you arrived home"

//#4 return value when moveCommand("right");

//"you found a river";

//#5 return value when moveCommand("left");

// nothing, the break happens before the action

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!