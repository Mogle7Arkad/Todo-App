import { addTodoToList } from "./createTodo";

function popUpForm(){
    document.querySelector("#todoForm").style.display = "block";
}

export function spreadTodoForm() {
    document.querySelector("#addTodo").addEventListener("click", ()=>{
        popUpForm();
    })
}

export function createNewCategory() {
    document.querySelector("#newCategoryBtn").addEventListener("click", () => {

    })
}

function closeUpForm(){
    document.querySelector("#todoForm").style.display = "none";
}

export function createNewTodo() {
    document.querySelector("#submitTodo").addEventListener("click", () => {
        addTodoToList();
        closeUpForm();
    })
}