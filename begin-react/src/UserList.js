import React,{useEffect} from 'react';



function User({user, onRemove, onToggle}){
    const {username, email, id,active} = user;

    //userEffect( 함수, deps)
    // deps는 의존되는 값을 넣은것으로, 없으면 컴포넌트가 처음 나타날때만 실행.
    // deps 값이 있을때,
    // 값이 설정되거나 바뀔때마다 호출이 된다. (마운트될때, props가 변할때, 언마운트될때)
    useEffect(()=>{
        console.log('user 값이 설정됨')
        console.log(user);
        return ()=>{
            //cleanup 함수 : useEffect에 대한 뒷정리
            //DOM이 바뀌기 직전에도 적용, 사라질때도 적용.
            console.log('user 값이 바뀌기전')
            console.log(user);
        }
    },[user]);


    return(
        <div>
            <b style={{
                color: active ? 'green' :'black',
                cursor :"pointer"
            }} 
            onClick={()=>onToggle(id)}
            >{username}</b> <span>{email}</span>
            <button onClick={()=> onRemove(id)} 
            // onClick(onRemove(id))라고하면 안된다. 렌더링 될때마다 삭제가 될것이다.*/
            >삭제</button>
        </div>
    )
}
function UserList({users, onRemove, onToggle}){
    return (
        <div>
            {/* <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/> */}

            {
                users.map(
                    (user) => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>)
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