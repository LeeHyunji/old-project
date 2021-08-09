import React from 'react';

function CreateUser({username, email, onChange, onCreate}){
    return(
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} onCreate={onCreate}/>
            <input name="email" placeholder="계정명" onChange={onChange} onCreate={onCreate}/>
            <button onClick={onCreate}>등록</button>
        </div>
    )
}
export default CreateUser;