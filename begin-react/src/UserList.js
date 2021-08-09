import React from 'react';



function User({user, onRemove}){
    const {username, email, id} = user;
    return(
        <div>
            <b>{username}</b> <span>{email}</span>
            <button onClick={()=> onRemove(id)} 
            // onClick(onRemove(id))라고하면 안된다. 렌더링 될때마다 삭제가 될것이다.*/
            >삭제</button>
        </div>
    )
}
function UserList({users, onRemove}){
    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {
                users.map(
                    (user) => (<User user={user} key={user.id} onRemove={onRemove}/>)
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