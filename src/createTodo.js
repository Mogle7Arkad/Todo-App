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

export function renderOnScreen(){
    let todoScreen = document.querySelector("#todoListsDiv");

    let itemInnerButtons = document.createElement("dive");
    itemInnerButtons.classList.add("item-btns");
    
    todoScreen.innerHTML = "";
    for (let i = 0; i < Todo.length; i++){
        let todo = Todo[i];
        let todoElement = document.createElement("li");
        todoElement.classList.add("todo-item");
        todoElement.innerHTML = `
        <h3 class = "todo-title">${todo.title}</h3>
        <h5 class = "todo-details">${todo.details}</h5>
        <h5 class = "todo-date">${todo.dueDate}</h5>
        <h4 class = "todo-priority">${todo.priority}</h4>
        `;

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerHTML = "X";

        let completedBtn = document.createElement("button");
        completedBtn.classList.add("completed-btn");
        completedBtn.innerHTML = "Completed";

        deleteBtn.addEventListener("click", function(event){
            event.preventDefault();
            const item = event.target;
            const todo = item.parentElement;
            todo.remove();
        })

        todoElement.appendChild(completedBtn);
        todoElement.appendChild(deleteBtn);
        
        todoScreen.appendChild(todoElement);
    }
    
}


