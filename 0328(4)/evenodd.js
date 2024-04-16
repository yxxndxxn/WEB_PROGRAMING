//입력한 수의 짝수, 홀수 판별
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('정수를 입력하세요 : ', function(num){
   if(num % 2 == 0){
    console.log("짝수입니다. ");
   }
   else{
    console.log("홀수입니다. ");
   }
    rl.close();
})