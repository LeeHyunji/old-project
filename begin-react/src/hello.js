import React from 'react';

function Hello({name,color}){
    const style = {
        fontSzie : 40,
        backgroundColor : "aqua",
        padding: "1rem"
    };
    return ( 
        <>
            {/* 주석입니다. */}
            <h1 style={{style}}>Hello World</h1>
            <div //class를 사용할땐 className으로 써주기
            style={{
                color // color:color 단축
            }}
            className="introduce">{name}, 안녕하세요</div>
        </>
    );
}

Hello.defaultProps={
    name : "noname"
}
export default Hello;