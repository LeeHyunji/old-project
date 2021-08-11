import React,{useEffect} from 'react';



function User({user, onRemove, onToggle}){
    const {username, email, id,active} = user;

    //userEffect( 함수, deps)
    // deps는 의존되는 값을 넣은것으로, 없으면 컴포넌트가 처음 나타날때만 실행.
    // 
    useEffect(()=>{
        // 컴포넌트가 마운트 될때 (이미 UI가 나타난 이후, 바로 Dom 접근 가능)
        // props -> state
        // REST API
        // D3 Video.js
        // SetInterval, setTimeout
        console.log('컴포넌트가 화면에 나타남');

        return ()=>{
            // 컴포넌트가 언마운트 될때 return
            // setInterval, setTimeout 작업을 clear 할때 clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거
            console.log('화면에서 사라짐');
        }
    },[]);


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