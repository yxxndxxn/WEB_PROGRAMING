// object 안에 function 만들기
const player ={
    name: "Dain",
    sayHello: function(otherPersonName){  //여기 주목~!
        //console.log("hello! " + otherPersonName);
        console.log(`hello! ${otherPersonName}`);
    }
}

console.log(player.sayHello);  //함수가 어케 생겼는지 보여줌
player.sayHello("Jiin");  //hello! Jiin

console.log(player.name);  //원래는 요롷고롬 프로퍼티에 접근하는디
console.log(player['name']); //대괄호 표기법 요렇게도 프로퍼티에 접근 가능


// object 안에 function 만들기 (return)
const Player ={
    name: "Dain",
    sayHello: function(otherPersonName){  //여기 주목~!
        //console.log("hello! " + otherPersonName);
        return`hello! ${otherPersonName}`;
    }
}

console.log(Player.sayHello("Jiin"));  //함수가 어케 생겼는지 보여줌