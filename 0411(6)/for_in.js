//for~in 반복문
//전체 프로퍼티를 읽어올 때
/*
for(key in object){
    //key는 객체의 각 프로퍼티의 키
}
*/
let user ={
    id: "다인",
    pw: "0204",
    mobile: "010-4099-2470",
    country: "대한민국"
}

for (let info in user){ //info는 키
    console.log(`${info} : ${user[info]}`);
}