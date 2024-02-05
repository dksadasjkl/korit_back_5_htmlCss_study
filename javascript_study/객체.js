// 자바스크립트 객체 형태 = { key : value, key: value }
let student = {
    name: "서창현",
    age : 27
}

console.log(student);
console.log(typeof(student));
console.log(student.name);

class Student {
    name;
    age;

    // 생성자
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let s = new Student("서창햔", 20);
console.log(s)
s.name = "서창현";
s.age = 27;
console.log(s);




class User {
    // #은 프라이빗
    #username;
    passward;

    set setUsername(username) {
        this.#username = username;
    }

    get username() {
        return this.#username;
    }


}

// 호출x, 대입o
let user = new User();
user.setUsername = "서창서";
console.log(user.username);

let dataMap = new Map();
dataMap.set("username", "dasdasdsdaad");
dataMap.set("passward", "1234");

console.log(dataMap);
console.log(dataMap.get("passward"));