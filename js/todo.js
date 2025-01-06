// Main purpose: To show/add/delete to-do list items on the screen.

// Assign html elements to variables
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";
let toDos =[];

// Function that saves the to-do list items in the local storage
function saveTodos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

// Function that handles the submit event of the to-do form
function handleToDoSumbit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = null;
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}


// Function that deletes the to-do list item from the screen
function deleteToDo(event){
    const liBtn = event.target.parentElement;
    liBtn.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(liBtn.id));
    saveTodos();
}


// Function that shows the to-do list item on the screen
function paintTodo(newTodo){
    const toDoLi = document.createElement("li");
    toDoLi.id = newTodo.id;
    const toDoSpan = document.createElement("span");
    toDoSpan.innerText = newTodo.text;
    const toDoBtn = document.createElement("button");
    toDoBtn.innerText = "x";
    toDoLi.appendChild(toDoSpan);
    toDoLi.appendChild(toDoBtn);
    toDoList.appendChild(toDoLi);
    toDoBtn.addEventListener("click", deleteToDo);
}

toDoForm.addEventListener("submit", handleToDoSumbit);

// Check if the to-do list items are saved in the local storage
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}

const userLogin = localStorage.getItem("username");
if(userLogin !== null){
    document.querySelector("#todo-form input").classList.remove("hidden");
}  