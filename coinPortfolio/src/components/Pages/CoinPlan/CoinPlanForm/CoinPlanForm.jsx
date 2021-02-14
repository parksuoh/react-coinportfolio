import React, { useEffect, useRef, useState } from 'react'
import './CoinPlanForm.css'

function CoinPlanForm({addCoinPlan}) {

    const [input, setInput] = useState('');

    const inputRef = useRef();
    const nextId = useRef(3);


    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = e => {
        setInput(e.target.value);
    }   
    //인풋의 상태바뀌는 이벤트가 발생하면 그값을 input 에 넣어줌

    const handleSubmit = e => {
        e.preventDefault();

        const coinPlanInput = {
            id: nextId.current,
            text: input || '',
            isComplete: false,
        }

        addCoinPlan(coinPlanInput);

        setInput('');
        nextId.current++;
    }
    //onSubmit 이벤트가 발생하면 더해주는 이밴트



    return (
        <form className="coinplanform" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" placeholder="코인계획을 입력해주세요" value={input} name="text" className="coinplanform-input" onChange={handleChange} />
            <button className="coinplanform-button">ADD</button>
        </form>
    )
}

export default CoinPlanForm
