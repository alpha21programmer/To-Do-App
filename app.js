const addButton = document.getElementById("button");

const listContainer = document.getElementById("list-container");

const inputBox = document.getElementById("todo-text");



function addTask() {
    
    if (inputBox.value === ""){
        alert("You must write something");

    } else{
        const listItem = document.createElement("li");
        listItem.innerHTML = inputBox.value;
        listItem.textContent = inputBox.value;
        listContainer.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);

        
    }
    inputBox.value="";
    saveData();
} 
     
addButton.addEventListener("click", addTask);

    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        }
        else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    },false);

    function saveData() {
        localStorage.setItem("myTaskData", listContainer.innerHTML);
    }

    function showData() {
        listContainer.innerHTML = localStorage.getItem("myTaskData");
    }
    showData();