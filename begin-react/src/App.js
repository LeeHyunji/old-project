import logo from './logo.svg';
import React,{useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';

function App(){
  const [inputs, setInputs] = useState({
    username : "",
    email : ""
  });
  const {username, email} = inputs;


  const onChange = (e) =>{
    const {name,value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    });
  };
  const onRemove = id =>{
    //배열의 불변성을 위해서 삭제된 새로운 배열을 생성해야한다.
    //filter는 배열에서 특정 조건을 만족하는 것으로 새로운 배열을 생성하는 메소드
    setUsers(users.filter(user=> user.id !== id));
  };

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email,
    }
    // push나 splice 사용하면 안됨, 배열의 불변성을 지켜줘야함.
    // setUsers([...users,user]); //배열에 값을 추가하는 방법 1. 배열 spread로 복사 후 추가 
    setUsers(users.concat(user)); // 배열에 값을 추가하는 방법 2. concat으로 기존배열과 신규배열 합침
    setInputs({
      username:"",
      email:"",
    });
    console.log(nextId.current);
    nextId.current +=1;
    //값이 바뀐다고 컴포넌트가 리렌더링 되지는 않는다!
  };
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users} onRemove={onRemove}></UserList>
    </>
  );
}

export default App;