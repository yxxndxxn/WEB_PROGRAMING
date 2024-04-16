//드라이브 포맷 여부 판별
//switch~case문으로!
const { copyFileSync } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('드라이브를 포맷하시겠습니까? ', function(ch){
   switch(ch){
    case 'y':
        console.log("예, 드라이브를 포맷하겠습니다.");
        break;
    case 'n':
        console.log("아니오, 드라이브를 포맷하지 않겠습니다.");
        break;
    default:
        console.log("유효한 문자를 입력하여 주세요.");
    
   }
    rl.close();
})