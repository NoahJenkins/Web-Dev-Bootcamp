// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.

var user1 = {
    username: "andy",
    password: "secret",
};


// 2. Create an array which contains the object you have made above and name the array "database".

var database = [user1];

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var newsfeed = {
    username: user1.username,
    timeline: "this is a timelinee",
};

var UserNamePrompt = prompt("What's your username?");
var PasswordPrompt = prompt("What's your password?");

function signIn(user,pass) {
    if (user === database[0].username && pass === database[0].password)
        console.log(newsfeed);
    console.log(newsfeed.timeline);
    elseif (
        console.log("Sorry, wrong username")
    );
};

