export function spreadTodoForm(){
    document.querySelector("#addTodo").addEventListener("click", ()=>{
        document.querySelector("#todoForm").style.display = "block";
    })
}

export function submitTodo(){
    document.querySelector("#submitTodo").addEventListener("click", (event) => {
        event.preventDefault();
        alert("haaa...")
    })
}