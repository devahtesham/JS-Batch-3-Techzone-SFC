const form = document.getElementById("form");
const todoListSection = document.querySelector('.todo-list');



// render todos
const renderTodos = (todos)=>{
    // console.log(todos);
    todoListSection.innerText = ""
    todos.map((todo,index)=>{
        todoListSection.innerHTML += `
        <div class="todo">
            <h3>${todo}</h3>
            <div>
                <button class="btn edit" onclick="editTodo(${index})">Edit</button>
                <button class="btn delete" id="delete-btn" onclick="deleteTodo(${index})">Delete</button>
            </div>
        </div>
    `
    })
}

const addTodo = (todo)=>{
    allTodos.push(todo);
}

const deleteTodo = (index)=>{
    // 1st method
    // allTodos.splice(index,1)
    // renderTodos(allTodos)

    // 2nd method
    let filteredTods = allTodos.filter((element,id)=>{
        return index !== id
    })
    allTodos = [...filteredTods]
    renderTodos(allTodos)
}


const editTodo = (id)=>{
    let myValue = allTodos[id];
    let updatedValue = prompt('Enter updated Value:- ',myValue);
    allTodos.splice(id,1,updatedValue)
    renderTodos(allTodos) // for performing impact on DOM

}

let allTodos=[]

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let todo = e.target.todo.value;

    // add todo
    addTodo(todo)
    // render my todos
    renderTodos(allTodos)

    
    form.reset()
})

