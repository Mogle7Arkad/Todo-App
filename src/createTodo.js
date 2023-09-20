import { deletebtn } from "./dommanipulation";

let Todo = [];
    
function TodoOb(title, details, dueDate, priority){
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
}

export function addTodoToList(){
    let title = document.querySelector("#todoTitle").value;
    let details = document.querySelector("#todoDetails").value;
    let dueDate = document.querySelector("#todoDueDate").value;
    let priority = document.querySelector("#todoPriority").value;
    let newTodo = new TodoOb(title, details, dueDate, priority);
    Todo.push(newTodo);
    renderOnScreen();
}

export function clearForm(){
    title.value = "";
    details.value = "";
    dueDate.value = "";
    priority.value = "";
}




