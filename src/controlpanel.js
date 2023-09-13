// export function naviBar(){
//     const listsContainer = document.querySelector("[data-lists");
// }
const listsContainer = document.querySelector(".schedule-list");

let lists = ["YAnga", "adorable"]

export function render(){
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement("li");
        listElement.classList.add("list-name");
        listElement.innerText = list;
        listsContainer.appendChild(listElement);
        console.log(listsContainer);
    })
}

function clearElement(elment){

}