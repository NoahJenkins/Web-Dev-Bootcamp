
// var button = document.getElementsByTagName("button")[0];
// button.addEventListener('click', function() {
//     console.log("Button clicked");
//     alert("You clicked me!" );
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
}


button.addEventListener("click", function() {
    console.log("click is working");
    if (inputlength() > 0) {
        createListElement();
    }
}
);
input.addEventListener("keypress", function(event) {
    console.log("keypress is working");
    if (inputlength() > 0 && event.key === "Enter") {
        createListElement();
    }
});