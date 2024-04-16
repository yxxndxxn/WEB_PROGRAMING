const userName = '윤다인';
const userPW = '0204';

function account(userId, userpw='0204')
{
    console.log(userId);
    console.log(userpw);
    const saveName = '윤다인;'
    const savePw = '0204';

    if(userId == saveName)
    {
        if(userpw == savePw)
        {
            console.log('반갑습니다' + userId+'님');
            //음// 뭘 잘못썼길래.. 이게 안나오냥..
        }
    }
}

account(userName, userPW)
