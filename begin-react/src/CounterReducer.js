// Counter.js를 useReducer로 다시 만들기.

import React, { useReducer } from 'react';

function reducer(state, action){
    //state(현상태, 숫자열/문자/객체/베앨) action(업데이트시 필요 객체) 를 통해서 새로운 state를 반환
    switch(action.type){
        case 'INCREMENT' :
            return state +1;
        case 'DECREMENT' :
            return state -1;
        default :
            throw new Error("Unhandled action");
            // return state;          
    } 
}

function CounterReducer(){
    //  dispatch : action을 발생시키는 함수
    // useReducer(reducer함수, 초기값)
    const [number, dispatch] = useReducer(reducer,0);
    const onIncrease = () =>{
        dispatch({
            type: "INCREMENT"
        });
    };
    const onDecrease = () =>{
        dispatch({
            type: "DECREMENT"
        });
    };
    
    return(
        <div>
            <h1>{number}</h1>
            {/* 이벤트를 사용할때 주의해야할점 : 함수를 넣는거지 호출X  */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default CounterReducer;