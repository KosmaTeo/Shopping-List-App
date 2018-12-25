var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector(".list");

function inputLength() {
	return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	};
};

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	};
};

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


function createListElement() {
	var li = document.createElement("li");
    
    //creating 2 buttons
	var doneButton = document.createElement("button");
	var deleteButton = document.createElement("button");
    
    // adding classes
    doneButton.classList.add("js_checkedBtn", "fa", "fa-check");
    deleteButton.classList.add("js_deleteBtn", "fa", "fa-times");

    // filling li
    li.appendChild(doneButton);
	li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteButton);
    li.classList.add("listItem");
    
    //add li to ul
	ul.appendChild(li);
	input.value = ""; // clearing input
    
    doneButton.addEventListener("click", makeDone);
    deleteButton.addEventListener("click", makeDelete);
};

function makeDone(){ 
this.parentNode.classList.toggle("js_makeDoneClass");
};

function makeDelete(){ 
this.parentElement.remove();
};

function addBtnToExistLi() {
    for(var i = 0; i < ul.children.length;i++) {
        var li = ul.children[i];
        var liValue = document.createTextNode(ul.children[i].innerHTML);
        li.innerHTML = "";
        
        //creating 2 buttons
        var doneButton = document.createElement("button");
        var deleteButton = document.createElement("button");
        doneButton.classList.add("js_checkedBtn", "fa", "fa-check");
        deleteButton.classList.add("js_deleteBtn", "fa", "fa-times");
        
    // filling the existing Li
    li.appendChild(doneButton);
    li.appendChild(liValue);
    li.appendChild(deleteButton);
        
    doneButton.addEventListener("click", makeDone);
    deleteButton.addEventListener("click", makeDelete);
    };
}; addBtnToExistLi();

