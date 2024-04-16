/*
전위 연산자, 후위 연산자
++a: a값을 먼저 1 증가시킨 후 연산 진행
a++: 연산을 진행한 후 a 값을 1 증가
*/

let a = 1;
console.log(a) ; //1

console.log(++a); //2
console.log(a++); //2

//조건부 연산자(신기신기!)
//condition ? value1(T) : value2(F);
let age = 30;
let result = age > 19 ? "성인입니다. " : "잘자렴!";
console.log(result);

age = 10;
result = age > 19 ? "성인입니다. " : "잘자렴!";
console.log(result);

//nulish 병합연산자(??)
//변수의 유효성 체크하는 코드
let id= "hello";
let reSult = (id ?? null) ? "아이디가 입력되었습니다." : "아이디가 입력되지 않았습니다. ";
console.log(reSult);
/*
id가 null도 아니고 undefined도 아닌 유효한 값이면 true로 평가되고
그렇지 않으면 ? 연산자 뒤의 null이 반환 됨
null은 특이하게 false로 반환되는 것이 아닌 null 그 자체로 반환 됨!
*/