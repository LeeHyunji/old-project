import React from 'react';



function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}
function UserList(){
    const users = [
        {
            id : 1,
            username : "hyunji",
            email : "hyunji015@gmail.com"
        },
        {
            id : 2,
            username : "tester",
            email : "tester@gmail.com"
        },
        {
            id : 3,
            username : "tester2",
            email : "tester2@gmail.com"
        }
    ]
    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {
                users.map(
                    (user) => (<User user={user} key={user.id}/>)
                )
                //만약 고유 key가 없는 경우, map에서 index를 사용 - 하지만 이때는 비효율적이고, 성능 개선이 되지 않는다.
                // users.map(
                //      (user,index) => (<User user={user} key={index}/>)
                //)
            }
        </div>
    )
}

export default UserList;
