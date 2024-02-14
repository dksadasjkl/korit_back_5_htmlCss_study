// async -> Promise<void> 를 리턴 
// 마지막에 resolve();가 생략되어있음
async function fx1() {
    console.log("fx1 비동기 호출");
    // throw new Error();
    return 10;  
};

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + "출력");
};

// await 비동기 -> 동기
// 리턴값을 리턴
// async function 안에서만 사용가능
async function fx3() {
    let arg = 0;
    let fx1Result = await fx1();
    arg = fx1Result;
    await fx2(arg);
};



// fx1() -> Promise<number> 호출 -> 동기 실행 -> then
async function handleSubmitClick2() {
   await fx3();
};


function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => {
        console.log("p1 프로미스 실행");
        reject();
    });

    // then.then은 값을 넘길수잇고 동기처리방식
    p1.then(() => {
        console.log("p1 then 실행")
        return 10;
    }).then((num) => {
        console.log(num)
    }).then(() => {
        console.log("세번째 then")
    }).catch(() => {
        console.log("오류")
    });

   
    
    const p2 = new Promise((resolve, reject) => {
        console.log("p2 프로미스 실행");
    });
    console.log("동기 실행")
}

