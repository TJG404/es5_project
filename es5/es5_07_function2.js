/** 함수 표현식 */
function greeter1(name){
    console.log("hello~~ " + name);
}

const greeter2 = function(name){
    console.log("hello~~ " + name);
}

const greeter3 = (name) => {    //ES6에 추가된 Arrow function
    console.log("hello~~ " + name);
}


greeter1("홍길동");
greeter2("홍길동");
greeter3("홍길동");
