var add_button = document.getElementById("btn_add");
var user_input = document.getElementById("user_input");
var list = document.getElementById("list");


function itemDone (event) {
    event.target.parentElement.classList.toggle("js_list_item_done");
    event.target.classList.toggle("js_list_item_done");
};

function itemDelete (event) {
    event.target.removeEventListener("click", itemDelete);
    event.target.removeEventListener("click", itemDone);
    event.target.parentElement.remove();
};



function addCheckedBtn (container) {
    var checkedBtn = document.createElement("button");
        checkedBtn.classList.add("js_checked_btn", "fa", "fa-check");
            container.appendChild(checkedBtn);
    
    checkedBtn.addEventListener("click", itemDone);
    // weird thing is: when I added icon inside button with .innerHTML method using <i> tag , the event argument didn't propagate to the parent button so the function didn't worked when clicked on icon, but when clicked under the icon (still on the button) it worked. This problem occured in the newest Chrome, but not in Mozilla and IE, where clicked <i> inside button passed the argument to the parent. When I deleted <i> and just added icon classes to button it worked on Mozilla and Chrome. IE also worked, but it didn't showed the icons.
};

function addDeleteBtn (container) {
    var deleteBtn = document.createElement("button");
        deleteBtn.classList.add("js_delete_btn", "fa", "fa-times");
            container.appendChild(deleteBtn);
    
        deleteBtn.addEventListener("click", itemDelete);
};


function createListItem() {
    if (user_input.value.length > 0) {
          var listItem = document.createElement("li");
            listItem.appendChild(document.createTextNode(user_input.value));
                user_input.value = '';
                    listItem.classList.add("list_item");
                        list.appendChild(listItem);
        
            addCheckedBtn(listItem);
            addDeleteBtn(listItem);
    };};

function createListItemPress(e) {
    if (e.which === 13) {
        createListItem();
    };};


function addToExistingItems () {
    var len = list.children.length;
    
        for (var i = 0; i < len; i++) {
            var listItem = list.children[i];      
        addCheckedBtn(listItem);
        addDeleteBtn(listItem);
    };};

addToExistingItems();
add_button.addEventListener("click", createListItem);
user_input.addEventListener("keypress", createListItemPress);


