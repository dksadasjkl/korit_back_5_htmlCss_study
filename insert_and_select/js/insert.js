async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };
    // json 문자멸
    const jsonData = JSON.stringify(data);
    // const dataObj = JSON.parse(jsonData);

    const option = {
        method: "post",
        Headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    }

    // fetch 비동기
    // .then 비동기 성공시 함수출력
    // fetch("http://localhost:8080/insert_and_select/data/addition", option)
    // .then((response) => {
    //         response.json()
    //     .then((json) => {
    //         console.log(json);
    //         console.log("test");
    //     })
    // }).catch((error) => {
    //     console.log("프로미스 예외처리");
    //     console.log(error);
    // })

    // await은 예외처리해야함.
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option)
        
        if(!response.ok) {
            // 자바에서 map
            throw await response.json();
        }

        console.log(response);

        //데이터
        const json = await response.json();

        console.log(json);
        
        console.log("test");
    } catch(error) {
        console.log(error);
        alert(error.errorMessage);
    }
    
}