var pro1 = new Promise(function(resolve, reject){
    resolve('success');
});
/*
콜백함수는 2개의 파라미터가 필요하며 보통 관습적으로 resolve와 reject를 사용함
reslove는 성공했을 때 호출할 함수 파라미터
reject는 실패했을 때 호출할 함수 파라미터
*/
pro1.then(function(result){
    console.log('result', result); 
})

//어렵다 이해가 안간다!!!!!!!!! 담에 다시 공부...