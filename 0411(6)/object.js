// object 만들기
/* const 상수화 대상은 player이므로 player가 참조하는 메모리의 주소값은 변경 안되지만
player의 프로퍼티는 const와 상관없는 내용일 뿐이므로 값이 얼마든지 변경될 수 있다*/

const player = {
    name: "Dain",  //property라고 함
    points: 10,
    fat: false,
    //여기서 왼쪽은 키, 오른쪽은 값
    //name은 키, Dain은 값
};
console.log(player);  //player object의 값을 다 보여줌!
console.log(player.name);  //name 값만 알려쥼
console.log(player["name"]);  //이렇게 써도 같은 결과를 낳음 (대괄호 표기법)

player.lastName = "Yoon";  //property 추가도 가능
console.log(player.lastName);

delete player.lastName; //property 삭제도 가능
console.log(player.lastName);

player.name = "Jiin";  //property 수정도 가능
console.log(player.name);

