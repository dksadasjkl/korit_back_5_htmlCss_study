function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");
    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };
    const jsonData = JSON.stringify(data);
    // const dataObj = JSON.parse(jsonData);

    const option = {
        method: "post",
        Headers: {
            "Content-Type": "application/json"
        },
        body: jsonData
    };
    // .then 비동기 성공시 함수출력
    fetch("http://localhost:8080/insert_and_select/data/addition", option)
    .then((response) => {
            response.json()
        .then((json) => {
            console.log(json.data);
        });
    });

    console.log("test");

}