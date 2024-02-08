// spread 연산 ...값의 변수명

// let array = [1,2,3,4];
// array.push(5);
// // 배열 안의 배열의 값 복사해서 5번에 추가
// array = [...array, 5, 6, ...array];

// console.log(array);


// let obj = {
//     name: "서창현",
//     age: 27
// }

// let obj2 = {
//     ...obj,
//     // 키값의 중복 x
//     name: "현창서"
// }

// console.log(obj);
// console.log(obj2);

// 비구조할당
// let obj  = {
//     id: 1,
//     name: "서창현",
//     age: 27
// }
// let {id, name, age} = obj;

// console.log(id, age);

let dataList = [];


window.onload = () => {
    getDataList();
    
    const addInput = document.querySelector(".add-input");
    
    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            const inputValue = addInput.value;
                   
            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            const dataObj = {
                id: lastId + 1,
                content: inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataObj)
            });

            dataList = [...dataList, dataObj];

            addInput.value = "";

            getDataList();
        }
    }
}

// 컴포넌트
// 함수명 대문자로 시작
function ContentData({id, content}) {
    return `
        <li>
            <span>${id}번 </span>
            <span>${content}</span>
            <input type="text" class="edit-inputs" value="${content}">
            <button onclick=" editData(${id})">수정</button>
            <button onclick="removeData(${id})">삭제</button>
        </li>
    `;
}

function getDataList() {
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = "";

    for(let dataObj of dataList) {
        contentList.innerHTML += ContentData(dataObj); 
    }
}


function editData(id) {
    // let findIndex = -1;
    // for (let i = 0; i < dataList.length; i++) {
        //     if(dataList[i].id === id) {
            //         findIndex = i;
            //         break;
            //     }
            // }
            
            let findObj = dataList.filter((dataObj) => dataObj.id === id)[0];
            
            let findIndex = dataList.indexOf(findObj);
            
            const editInputs = document.querySelectorAll(".edit-inputs");
            
            dataList[findIndex].content = editInputs[findIndex].value;

            getDataList();

}






function removeData(id) {
    // .filter(함수) 반복해서 새로운 배열을 생성 
    dataList = dataList.filter((dataObj) => dataObj.id !== id);

    getDataList();
}