//레이블
let dan =2;
outside : while(dan <10){  //이걸 레이블(label)이라고 함!!!: 특정 위치를 나타내는 식별자
    let num = 1;
    while(num < 10){
        if (dan == 6){
            break outside;
        }
        console.log(dan + " * "  + num + " = " + dan * num);
        num++;
    }
    console.log();
    dan++;
}
//이렇게 하면 6단부터 아예 while을 빠져나감요!
/*
레이블 사용 문법
: 반복문 앞에 레이블 이름을 적고 콜론(:)으로 구분한다
레이블 이름은 위치 태그를 달아놓은 것이라 생각하면 됨
break 문을 사용할 때 해당 레이블 이름을 적어주면 해당 위치로 빠져나감!!
*/