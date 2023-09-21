import { addTodoToList } from "./createTodo";

const formPopUpBtn = document.querySelector(".addTodo-btn");
const todoForm = document.querySelector(".todo-form");
const submitTodoBtn = document.querySelector(".submit-button")
const deleteTodoBtn = document.querySelector(".delete-btn");

export function popUpForm() {
    formPopUpBtn.addEventListener("click", () => {
        todoForm.style.display = "block";
    })
}

export function submitTodo() {
    submitTodoBtn.addEventListener("click", () => {
        addTodoToList();
        todoForm.reset();
    })
}