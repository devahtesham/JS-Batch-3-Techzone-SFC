const form = document.getElementById("form");
const todoListSection = document.querySelector('.todo-list');



// render todos
const renderTodos = (todos)=>{
    // console.log(todos);
    todoListSection.innerText = ""
    todos.map((todo)=>{
        todoListSection.innerHTML += `
        <div class="todo">
            <h3>${todo}</h3>
            <div>
                <button class="btn edit">Edit</button>
                <button class="btn delete" id="delete-btn">Delete</button>
            </div>
        </div>
    `
    })
}

const addTodo = (todo)=>{
    allTodos.push(todo);
}

let allTodos=[]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let todo = e.target.todo.value;

    // add todo
    addTodo(todo)
    // render my todos
    renderTodos(allTodos)

    // delete
    const deleteBtn = document.getElementById("delete-btn");
    console.log(deleteBtn);
    deleteBtn.addEventListener("click",()=>{
        console.log("delete");
    })
    
    form.reset()
})

