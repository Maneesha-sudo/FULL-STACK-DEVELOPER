// Enter task>>add task>>delete them>>complete

const taskInput = document.getElementById("taskInput");
const taskbtn = document.getElementById("taskbtn");
const taskList = document.getElementById("taskList");

//Adding tasks dynamically
//need to take event of button-as we click it then tasks will add

taskbtn.addEventListener("click", () => {
    const input = taskInput.value;
    if (input === "") return;

    const li = document.createElement("li");
    li.textContent = input;
    taskInput.value = ""  //clear taskinput

    //create del button dynamically
    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";

    delbtn.addEventListener("click", () => {
        li.remove();
    })
    


//add complete btn dynamicallu
const completebtn= document.createElement("button");
completebtn.textContent="Complete";

completebtn.addEventListener("click", ()=>{
    li.style.color="Grey";
    li.style.textDecoration = "line-through";
});

li.appendChild(delbtn);
li.appendChild(completebtn);
    taskList.appendChild(li);
});

