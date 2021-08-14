// App.js 배열랜더링을 useReducer로 다시 만들기.

import logo from './logo.svg';
import React,{useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import './App.css';


function countActiveUser(users){
  console.log("활성 사용자 세는 중 ..");
  return users.filter(user=>user.active).length;
}

//초기상태
const initialState = {
    inputs : {
      username : "",
      email : ""
    },
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
      case "CHANGE_INPUT" :
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.name] : action.value
          }
        }
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
  //비구조할당
  const {inputs, users} = state;
  const {username, email} = state.inputs;
  const nextId = useRef(4);

  const onChange = useCallback(e=>{
    const {name, value} = e.target;
    dispatch({
      type : "CHANGE_INPUT",
      name,
      value
    });
  },[]);

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
  },[username, email]);

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