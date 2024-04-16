//계산된 프로퍼티
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('무조건 천원! 상품을 입력하세요 : ', function(obj){
    let basket ={
        [obj] : "1000원!",
    }
    console.log(basket[obj]);


    rl.close();
})


//단축 프로퍼티
//객체의 프로퍼티 키와 값의 이름이 같은 경우

let id = "Dain";
let pw = "0204";

let user={
    id,
    pw,
}

console.log(user.id);
console.log(user.pw);


