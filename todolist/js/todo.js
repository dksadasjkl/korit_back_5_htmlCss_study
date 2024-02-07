window.onload = () => {
    getTodoList();

    // let arr = [1,2,3,4,5,6,7,8,9,10];
    // console.log(arr);

    // let newArr = [];

    // for (let i = 0; i < arr.length; i++){
    //     if(arr[i] % 2 === 0) {
    //         newArr.push(arr[i]);
    //     }
    // }

    // console.log(newArr);

    // // '참'일때만 실행
    // let newArr2 = arr.filter(num => num % 2 === 0);
    // console.log(newArr2[2]);

    
}


function getTodoList() {
    const todoContentList = document.querySelector(".todo-contant-list");

    const todoListJson = localStorage.getItem("todoList");
    const todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    todoContentList.innerHTML = "";

    for(let todo of todoList) {
        todoContentList.innerHTML += `
        <li class="todo-contant-box">
            <div class="todo-contant-header">
                    <span>
                        <i class="fa-regular fa-star"></i>
                    </span>
                    <span class="todo-content-date">
                         ${todo.date}
                    </span>
             </div>
            <div class="todo-contant-main">
                <pre class="todo-contant">${todo.content}</pre>
            </div>
            <div class="todo-contant-footer">
                <button class="todo-edit-button" onclick="handleEditTodoModalOpen(${todo.todoId})">
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button class="todo-romeve-button" onclick="handleRemoveTodoClick(${todo.todoId})">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
        `;
    }

}

function handleRemoveTodoClick(todoId) {
    let selected = confirm("정말로 삭제하시겠습니까??????????");
    if(!selected) {
        return;
    }

    const todoListJson = localStorage.getItem("todoList");
    const todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();
    const newTodoList = todoList.filter(todo => todo.todoId !== todoId);

    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    getTodoList();

}