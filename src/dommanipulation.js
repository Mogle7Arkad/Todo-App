export function spreadTodoForm(){
    document.querySelector("#addTodo").addEventListener("click", ()=>{
        document.querySelector("#todoForm").style.display = "block";
    })
}