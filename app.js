const  listContainer = document.getElementById("list-container");

const  inputBox = document.querySelector("button");

function addTask() {
    if (inputBox.value === ''){
        alert("You must write something");

    } else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
    }

} ;
     
button.addEventlistener("click", addTask());

    