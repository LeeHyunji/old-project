import React from 'react';

function Hello({name,color, isSpecial}){
    const style = {
        fontSzie : 40,
        backgroundColor : "aqua",
        padding: "1rem"
    };
    return ( 
        <>
            <div
            style={{
                color // color:color 단축
            }}>
            {isSpecial&&<b>*</b>//isSpecial ? <b>*</b> : null 
            }{name}, 안녕하세요</div>
        </>
    );
}

Hello.defaultProps={
    name : "noname"
}
export default Hello;