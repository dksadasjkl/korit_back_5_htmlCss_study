function getInputList() {
    const inputContentList = document.querySelector(".input-content-list");

    let inputListJson = localStorage.getItem("inputList");
    let inputList = inputListJson !== null ? JSON.parse(inputListJson) : new Array();

    inputContentList.innerHTML = "";

    for(let list of inputList) {
        inputContentList.innerHTML += `
            <li>
                <span>${list.id}번</span>
                <span>${list.content}</span>
                <input type="text" >
                <button class="edit-button" onclick="handleEditSubmit()">수정</button>
                <button class="cancel-button" onclick="삭제함수()">삭제</button>
            </li>
        `;
    }

}

function handleRemoveClick(id) {
    let selected = confirm("정말로 삭제하시겠습니까??????????");
    if(!selected) {
        return;
    }

    let inputListJson = localStorage.getItem("inputList");
    let inputList = inputListJson !== null ? JSON.parse(inputListJson) : new Array();
    const newinputList = inputList.filter(id => id.id !== id);

    localStorage.setItem("inputList", JSON.stringify(inputList));
    getInputList();

}
