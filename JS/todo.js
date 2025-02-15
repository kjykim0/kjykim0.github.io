const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
const removeToDos = document.querySelector("#delete-todos");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos(toDos);
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button. innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    removeToDos.classList.remove(HIDDEN_CLASSNAME);
}

function handleToDoSubmit(event){
    event.preventDefault();
    if(localStorage.getItem("username") === null){
        toDoInput.value = "";
        alert("Log in please!");
    } else{
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos(newTodo);
    }
}

function removeAllTodos(){
    localStorage.removeItem(TODOS_KEY);
    toDos = [];
    toDoList.replaceChildren();
    removeToDos.classList.add(HIDDEN_CLASSNAME);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
removeToDos.addEventListener("click", removeAllTodos);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);
}

if(localStorage.getItem("username") === null){
    removeAllTodos();
    //toDoForm.classList.add(HIDDEN_CLASSNAME);
}


if(toDos.length === 0){
    removeToDos.classList.add(HIDDEN_CLASSNAME);
}