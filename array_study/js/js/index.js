
function addInput() {
    const inputText = document.querySelector(".input-text");
    window.onkeydown = (e) => {
        if(e.ctrlKey && e.keyCode === 13) {
            handleAddInput()
        }
    }
}

function handleAddInput() {
    const inputText = document.querySelector(".input-text");
    
    
    let inputListJson = localStorage.getItem("inputList");
    let inputList = inputListJson !== null ? JSON.parse(inputListJson) : new Array();
    let lastIdexListId = inputList.length === 0 ? 0 : inputList[inputList.length - 1].id;

    let dataObj = {
        id: lastIdexListId + 1,
        content: inputText.value
    }

    inputList.push(dataObj);
    localStorage.setItem("inputList", JSON.stringify(inputList));
    getInputList();
    inputText.value = "";
}


function handleEditModalOpen(id) {
    const inputText = document.querySelector(".input-text");
    const editButton = document.querySelector(".edit-button");
    
    
    let inputListJson = localStorage.getItem("inputList");
    let inputList = inputListJson !== null ? JSON.parse(inputListJson) : new Array();
    
    
    let findId = inputList.filter(sid => sid.id === id)[0];
    
    inputText.value = findId.content;
    
    editButton.onclick = () => handleEditSubmit(id);

    

} 

function handleEditSubmit(id) {

    let inputListJson = localStorage.getItem("inputList");
    let inputList = inputListJson !== null ? JSON.parse(inputListJson) : new Array();
    let lastIdexListId = inputList.length === 0 ? 0 : inputList[inputList.length - 1].id;

    let findIndex = -1; 

    let dataObj = {
        id: lastIdexListId + 1,
        content: inputText.value
    }
    
    for (let i = 0; i < inputList.length; i++) {
        if(inputList[i].id === id) {
            findIndex = i;
            break;
        }
    }

    if(findIndex === -1) {
        alert("오류");
        return;
    }
    


    inputList[findIndex].content = document.querySelector(".input-text").value;

    localStorage.setItem("inputList", JSON.stringify(inputList));
    getInputList();

}