import logo from './logo.svg';
import React,{useRef} from 'react';
import UserList from './UserList';
import './App.css';

function App(){
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
];
  const nextId = useRef(4);
  const onCreate = () =>{
    console.log(nextId.current);
    nextId.current +=1;
    //값이 바뀐다고 컴포넌트가 리렌더링 되지는 않는다.
  }
  return (
    <UserList users={users}></UserList>
  );
}

export default App;
