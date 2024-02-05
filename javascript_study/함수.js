function add(num1, num2) {
    console.log("num1 " + num1);
    console.log(`num2 ${num2}`); // 표현식
    return num1 + num2;
}

console.log(add(10, 20));

// 함수는 주소값 -> 변수에 담을수 있음
let addFunction = add;
console.log(add);
console.log(addFunction);
console.log(addFunction(10, 50)); 

let user = {
    username: "서창현",
    password: "1234",
    addFunction: function add(a, b) {
        return a + b 
    }
}

console.log(user.addFunction(10, 20));

// 익명 함수 (함수명 표기x)
let sub = function (a, b) {
    return a - b;
}

let result1 = sub(10, 5);
console.log(result1);


console.log(sub);

// 화살표함수(람다식)
let div = (a, b) => {
    return a / b;
}

console.log(div(10, 5));

div = (a, b) => a / b;
console.log(div(20, 5));
console.log(div);

