let todoList = []

export function renderOnScreen(){
    let todoLists = document.querySelector("#todoLists");
    for (let i = 0; i < todoList.length; i++){
        console.log(todoList[i])
    }
}