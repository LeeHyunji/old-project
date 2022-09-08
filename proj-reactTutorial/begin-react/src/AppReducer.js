// App.js 배열랜더링을 useReducer로 다시 만들기.

import logo from './logo.svg';
import React,{useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';
//inputs를 관리하는 custom Hook
import useInputs from './useInputs';


function countActiveUser(users){
  console.log("활성 사용자 세는 중 ..");
  return users.filter(user=>user.active).length;
}

//초기상태
const initialState = {
    users : [
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
    ]
}
function reducer(state,action){
  switch(action.type){
      case "CREATE_USER" :
        return {
          inputs : initialState.inputs,
          users : state.users.concat(action.user)
        }
      case "TOGGLE_USER" :
        return {
          ...state,
          users : state.users.map(user => 
            user.id === action.id ? {...user,active: !user.active} : user
          )
        }
      case "REMOVE_USER" :
        return {
          ...state,
          users : state.users.filter(user => user.id !== action.id )
        }
      default :
        throw new Error("Unhandled action");
  }
}

function App(){
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({
    username : "",
    email : ""
  })
  const {username ,email} = form;
  //비구조할당
  const {inputs, users} = state;
  const nextId = useRef(4);

  const onCreate = useCallback( e =>{
    dispatch({
      type : "CREATE_USER",
      user : {
        id : nextId.current,
        username,
        email,
      }
    });
    nextId.current +=1;
    // reset을 추가한 이유는 custom hook에서 반환한거기 때문에 ESLint규칙상 넣어줘야하는것
    // 새로운 항목을 추가 할 때 input 값을 초기화해야 하므로 데이터 등록 후 reset() 을 호출해주세요.
    reset();
  },[username, email,reset]);

  const onToggle = useCallback(id =>{
    dispatch({
      type : "TOGGLE_USER",
      id
    });
  },[]);

  const onRemove = useCallback(id =>{
    dispatch({
      type : "REMOVE_USER",
      id
    });
  },[]);

  const count = useMemo(()=>countActiveUser(users),[users]);
  return (
    <>
      <div>활성 사용자 수 : {count}</div>
      <CreateUser 
        username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}  onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;