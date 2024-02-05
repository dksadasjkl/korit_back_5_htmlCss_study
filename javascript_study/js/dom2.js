const submitButton = document.querySelector(".input-submit");

// 이벤트 속성
submitButton.onclick = () => {
    const input = document.querySelector(".inputs");
    const dataList = document.querySelector(".data-list");
    // innerHTML 태그안에 자식추가
    dataList.innerHTML += `<li>${input.value}</li>`;
}

/*
    let submitButton = {
        onclick: null
    }

    submitButton.onclick = () => {

    }
*/