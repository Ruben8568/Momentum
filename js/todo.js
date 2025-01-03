const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "toDos";
let toDos =[];

function saveTodos(){
    localStorage.setItem("toDos", JSON.stringify(toDos));
}

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

function deleteToDo(event){
    const liBtn = event.target.parentElement;
    liBtn.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(liBtn.id));
    saveTodos();
}

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

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}