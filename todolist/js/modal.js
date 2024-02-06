function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";

    submitButton.onclick = handleAddToDoSubmit;

    

    modal.classList.add("modal-show");
} 

function handleAddToDoSubmit() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show")
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show")
}