const fs = require('fs');
const path = require('path');

const floor = fs.readFileSync(path.join(__dirname, 'floor.txt'));
console.log('Floor:', floor.toString());
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