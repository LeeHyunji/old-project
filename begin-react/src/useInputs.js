import { useState, useCallback } from "react";


//관리할 form에 대해서 초기값을 파라매터로 받아온 다음에, 
//이 Hooks이 반환하는 onChange를 통해서 change이벤트를 관리하고, 상태는 form에서 조회, 초기화는 reset을 호출
function useInputs(initialForm){
    const [form, setForm] = useState(initialForm);
    const onChange = useCallback (e=>{
        const {name,value} = e.target
        setForm(form=>({...form, [name]: value}));
    },[]);
    const reset = useCallback(()=> setForm(initialForm),[initialForm]);

    return [form, onChange, reset];
};

export default useInputs;