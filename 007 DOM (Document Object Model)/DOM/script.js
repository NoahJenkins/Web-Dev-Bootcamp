// var button = document.getElementsByTagName("button")[0];

// button.addEventListener('click', function() {
//     console.log("Button clicked");
//     alert("You clicked me!" );
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    console.log("click is working");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
}
);