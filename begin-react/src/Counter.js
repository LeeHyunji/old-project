import React, {useState} from 'react';

function Counter(){
    const [number, setNumber] = useState(0);

    const onIncrease = () =>{
        //setNumber(number+1);
        setNumber(prevNumber => prevNumber +1);
        console.log("+1");
    }
    const onDecrease = () =>{
        //setNumber(number-1);
        setNumber(prevNumber => prevNumber -1);
        console.log("-1");
    }

    return(
        <div>
            <h1>{number}</h1>
            {/* 이벤트를 사용할때 주의해야할점 : 함수를 넣는거지 호출X  */}
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}
export default Counter;