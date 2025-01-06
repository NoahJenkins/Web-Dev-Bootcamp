
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
    if (input.value > 0) {
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
    else {
        alert("Please do not leave the box empty");
    }
}
);
button.addEventListener("keypress", function(event) {
    console.log("keypress is working");
    if (input.value > 0 && event.keyCode === 13) {
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
    else {
        alert("Please do not leave the box empty");
    }
}
);