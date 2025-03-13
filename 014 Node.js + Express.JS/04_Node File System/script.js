const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => { //readFile is asynchronous, it will run in the background and will not block the code
    if (err) {
        console.log('errror');
    }
    else {
        console.log(data.toString()); //we add toString() to convert the buffer to a string, otherwise it will print a buffer (raw data)
    }
});

const file = fs.readFileSync('./hello.txt'); //readFileSync is synchronous, it will block the code until it finishes
console.log("2",file.toString());

// fs.appendFile('./hello.txt', ' This is so cool!', err => { //appendFile will add the text to the file
//     if (err) {
//         console.log(err);
//     }
// });

// fs.writeFile('bye.txt', 'Sad to see you go', err => { //writeFile will create a new file with the text)
//     if (err) {
//         console.log(err);
//     }});

fs.unlink('bye.txt', err => { //deleteFile will delete the file
    if (err) {
        console.log(err);
    }
    else {
        console.log('file deleted');
    }

});