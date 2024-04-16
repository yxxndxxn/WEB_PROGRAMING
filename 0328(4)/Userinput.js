const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 이 루틴은 사용자 입력을 위해 무조건 작성하고 시작한다.
// realine 모듈을 읽어와서 createInterface 함수를 통해 입출력 객체 rl을 생성한다.

rl.question('프로그래밍 언어 이름을 입려가시오. : ', function(data){
    //입력값에 대한 처리
    //이제 이부분을 내가 바꾸는거지!, 앞 부분까진 복붙!
    console.log('가장 좋아하는 프로그래밍 언어는 ' +data+ '입니다.');
    rl.close();
})
/* rl객체로 입력함수 호출, 첫번째 전달인자는 터미널 창에 출력할 질문,
두 번째 전달인자는 사용자 입력을 처리하는 콜백함수(function(data)) 
-> data는 입력 변수!!
-> 변수 처리는 +data+ 처럼 변수 이름 양옆에 +붙임~!~
*/

//입력이 끝나면 rl.close()를 호출해야함!
//rl.closer()는 입력을 멈추게 하는 기능임

//c++에 cin, cout을 이렇게 하는거네.. 많이 기네..

