/*
if-else 구조는 else if로 인한 조건이 점점 증가할 수록
비교 연산이 많아져서 효율성이 떨어짐

코드의 가독성을 점점 저하시키는 else if문의 단점을 보완한게 switch~case문!
*/

const n = 2;

switch(n)
{
    case 1:
        console.log("1번을 선택하였습니다.");
        break;

    case 2:
        console.log("2번을 선택하였습니다.");
        break;
    default:
        break;
}   