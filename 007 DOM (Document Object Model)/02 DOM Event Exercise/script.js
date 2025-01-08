var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
listItems = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function addDeleteButton(listItems) {
	var deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function() {
		console.log("delete button is working");
		listItems.remove();
	});
	listItems.appendChild(deleteButton);
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	// run the addDeleteButton function for each new list item created
	addDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// run the addDeleteButton function for each existing list item when the page loads
listItems.forEach(li => {
	addDeleteButton(li);
});