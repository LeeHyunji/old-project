import React, {useState} from 'react';

function InputSample(){
    const [inputs, setInputs] = useState({
        name : "",
        nickname : ""
    });
    const {name, nickname}  = inputs;
    const onChange = (e) =>{
        const {name, value} = e.target;
        
        //react에서 객체를 업데이트 할때는 기존 객체를 복사 후 사용한다. (불변성을 지킨다.)
        /*
        const nextInputs = {
            ...inputs, //js spread 문법
            [name]: value // name의 값에 따라 설정 
        };
        setInputs = nextInputs;
        */

        setInputs({
            ...inputs,
            [name]: value
        })
    };
    const onReset = (e) =>{
        setInputs({
            name : "",
            nickname : ""
        })
    };
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placehoder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;