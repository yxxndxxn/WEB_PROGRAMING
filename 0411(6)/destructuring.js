//배열 구조 분해
const color = ['red', 'green', 'blue'];
let [r, g, b] = color;  //오른쪽(color)배열의 요소가 분해되어서 왼쪽에 순서대로 대입 됨
//이게 분해하는 코드인고임

console.log(r);
console.log(g);
console.log(b);
console.log();
//배열의 변수 값 변경
[b, g, r] = ['red', 'green', 'blue'];
console.log(r);  //blue
console.log(g);  //green
console.log(b);  //red
//아이고 헷갈린당

