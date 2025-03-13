const fs = require('fs');


const floor = fs.readFileSync('./floor.txt');
console.log('Floor:', floor);
const floorArray = floor.toString().split('');
let currentFloor = 0;

for (let i = 0; i < floorArray.length; i++) {
    if (floorArray[i] === '(') {
        currentFloor++;
    }
    else if (floorArray[i] === ')') {
        currentFloor--;
    }
    if (currentFloor === -1) {
        console.log('Basement entered at:', i + 1);
        break;
    }
};

console.log('Final floor:', currentFloor);