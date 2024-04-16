//사용자 입력값이 문자인 경우
//드라이브 포맷 여부 판별
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('문자를 입력하세요 : ', function(ch){
   if(ch == 'y'){
    console.log("네, 드라이브를 포맷하겠습니다.");
   }
   else if (ch == 'n'){
    console.log("아니오, 드라아비를 포맷하지 않겠습니다.");
   }
   else{
    console.log("올바른 문자를 입력하여 주세요.")
   }
    rl.close();
})