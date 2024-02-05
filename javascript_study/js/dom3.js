let index = 1;
const submitButton = document.querySelector(".append-button");
submitButton.onclick = () => {
    const inputs = document.querySelectorAll(".inputs");
    const dataTableBody = document.querySelector(".data-table-body");
   
    
    dataTableBody.innerHTML += 
    `<tr>
    <td>${index}
    <td>${input.value[0]}</td>
    <td>${input.value[1]}</td>
    <td>${input.value[2]}</td>
    </tr>
    `;

    index++;
    
    for(let input of textInputs) {
        input.value = "";
    }
   
    

}