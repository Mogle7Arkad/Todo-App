let Todo = [];

function TodoOb(title, details, dueDate, priority){
    this.title = title;
    this.details = details;
    this.dueDate = dueDate;
    this.priority = priority;
}

export function addTodoToList(){
    let displayForm = document.querySelector(".display-form");
    let title = document.querySelector("#todoTitle").value;
    let details = document.querySelector("#todoDetails").value;
    let dueDate = document.querySelector("#todoDueDate").value;
    let priority = document.querySelector("#todoPriority").value;
    let newTodo = new TodoOb(title, details, dueDate, priority);
    console.log(newTodo);
}