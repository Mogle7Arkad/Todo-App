import { addTodoToList } from "./createTodo";

export function spreadTodoForm() {
    document.querySelector("#addTodo").addEventListener("click", ()=>{
        document.querySelector("#todoForm").style.display = "block";
    })
}

export function createNewCategory() {
    document.querySelector("#newCategoryBtn").addEventListener("click", () => {

    })
}

export function createNewTodo() {
    document.querySelector("#submitTodo").addEventListener("click", () => {
        addTodoToList();
    })
}