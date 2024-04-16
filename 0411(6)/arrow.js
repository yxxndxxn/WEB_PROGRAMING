//화살표 함수
let minus = (a, b) =>{
	return a - b;
}

let result = minus(20, 10);
console.log(`두 수의 차 ${result}`);  //템플릿 형식

//화살표 함수의 구현부 내용이 return문 밖에 없는 경우에는 중괄호와 return문 생략 가능
let plus = (a, b) => a + b;
let sum = plus(10, 20);
console.log(`두 수의 합 ${sum}`);