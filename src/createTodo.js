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
    console.log(newTodo);
    Todo.push(newTodo);
    renderOnScreen();
}

export function renderOnScreen(){
    let todoScreen = document.querySelector("#todoListsDiv");
    todoScreen.innerHTML = "";
    for (let i = 0; i < Todo.length; i++){
        let todo = Todo[i];
        let todoElement = document.createElement("li");
        todoElement.classList.add("todo-item");
        todoElement.innerHTML = `
        <h3 class = "todo-title">${todo.title}</h3>
        <h5 class = "todo-title">${todo.details}</h5>
        <h5 class = "todo-title">${todo.dueDate}</h5>
        <h4 class = "todo-title">${todo.priority}</h4>
        <button class = "delete-btn">X</button>`;
        todoScreen.appendChild(todoElement);
    }
}

