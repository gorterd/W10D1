let todos = [];

const ul = document.querySelector("ul.todos");
const form = document.querySelector("form.add-todo-form");

form.addEventListener("submit", addToDo);

function addToDo(e){
    e.preventDefault();
    const input = document.querySelector("input[name='add-todo']");
    const todo = {
        value: input.value,
        done: false
    };
    input.value = "";
    todos.push(todo);
    localStorage.setItem("todos-list", JSON.stringify(todos))
    appendTodo(todo);

    console.log(todos);
    // populateList(todos);
}

function appendTodo(todo){
    let label = document.createElement("label");
    label.innerHTML = todo.value;
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    checkbox.data =  todo;

    let li = document.createElement("li");
    li.append(label, checkbox);
    ul.append(li); 
    // todos.forEach( (todo) => {
    //     let label = document.createElement("label");
    //     label.innerHTML = todo.value;
    //     let checkbox = document.createElement("input");
    //     checkbox.type = "checkbox";
    //     checkbox.checked = todo.done;

    //     let li = document.createElement("li");
    //     li.append(label, checkbox);
    //     ul.append(li); 
    // });
}

function initializeList(){
    todos.forEach( (todo) => {
        appendTodo(todo);     
    });
}

document.addEventListener("DOMContentLoaded", function(){
    let storedTodos = localStorage.getItem("todos-list");
    
    if (storedTodos){
        todos = JSON.parse(storedTodos);
        initializeList();
    }
});

let cb = document.querySelectorAll(".todos input[type=checkbox]");

// Array.from(cb).forEach(el => {
    ul.addEventListener("click", function(e){
        if (e.target.type === "checkbox"){
            let temp = e.target;
            let todo = temp.data;
            todo.done = temp.checked;
            localStorage.setItem("todos-list", JSON.stringify(todos));
        }
        // let checkbox = e.currentTarget;
        // let todo = checkbox.data;
        // todo.done = checkbox.checked;
        
    })
// })
