import React, { useState, useEffect } from 'react'

const Timer = () => {

    const [counter, setCounter] = useState(30)

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div>Time left: {counter}</div>
    )
}

export default Timer
