import logo from './logo.svg';
import React,{useRef, useState, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';


function countActiveUser(users){
  console.log("활성 사용자 세는 중 ..");
  return users.filter(user=>user.active).length;
}

function App(){
  const [inputs, setInputs] = useState({
    username : "",
    email : ""
  });
  const {username, email} = inputs;


  const onChange = useCallback((e) =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  },[inputs]);

  

  const [users, setUsers] = useState([
      {
          id : 1,
          username : "hyunji",
          email : "hyunji015@gmail.com",
          active : true
      },
      {
          id : 2,
          username : "tester",
          email : "tester@gmail.com",
          active :false
      },
      {
          id : 3,
          username : "tester2",
          email : "tester2@gmail.com",
          active:false
      }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id : nextId.current,
      username,
      email,
    }
    // push나 splice 사용하면 안됨, 배열의 불변성을 지켜줘야함.
    // setUsers([...users,user]); //배열에 값을 추가하는 방법 1. 배열 spread로 복사 후 추가 
    setUsers(users => users.concat(user)); // 배열에 값을 추가하는 방법 2. concat으로 기존배열과 신규배열 합침
    setInputs({
      username:"",
      email:"",
    });
    console.log(nextId.current);
    nextId.current +=1;
    //값이 바뀐다고 컴포넌트가 리렌더링 되지는 않는다!
  },[username,email,]);

  const onRemove = useCallback((id) =>{
    //배열의 불변성을 위해서 삭제된 새로운 배열을 생성해야한다.
    //filter는 배열에서 특정 조건을 만족하는 것으로 새로운 배열을 생성하는 메소드
    setUsers(users => users.filter(user=> user.id !== id));
  }, []);
  
  const onToggle = useCallback(id =>{
    setUsers(users =>  users.map(
      user=> user.id === id 
      ? {...user, active:!user.active} 
      : user
    ));
  },[]);

  //useMemo( 함수, deps)
  //렌더링 중이어도, deps가 변경될때만  해당 함수를 처리할수 있도록 성능 최적화
  const count = useMemo(()=>countActiveUser(users), [users]);
  return (
    <>
      <div>활성 사용자 수 : {count}</div>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove}  onToggle={onToggle}></UserList>
    </>
  );
}

export default App;