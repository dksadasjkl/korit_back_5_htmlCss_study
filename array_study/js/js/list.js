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
