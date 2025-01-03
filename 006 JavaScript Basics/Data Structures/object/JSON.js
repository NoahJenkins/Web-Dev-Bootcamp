var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    spells: ["abrakadabra", "shazam", "boo"],
    shout: function() {
        console.log("AHHHHHHH!");
    }
};

console.log(user.age);
console.log(user.hobby);

user.favoriteFood = "spinach";
console.log(user.favoriteFood);

user.isMarried = true;
// output: isMarried: true instead of isMarried: false

user.spells[1];
// output: shazam

var list = [
    {
        username: "andy",
        password: "secret",
    },
    {
        username: "jess",
        password: "123",
    }
];

list[0].password;
// output: secret

user.shout();
// output: AHHHHHHH!
// shout is a method of the user object

console.log()
//console is a global object in JavaScript that is used to log information to the console.