import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import './style.css'

const Questions = () => {
    const [counter, setCounter] = useState(30);
    // const [shuffledAnswers, setShuffledAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [isGameOver, setIsGameOver] = useState(false);
    const dispatch = useDispatch();
    const gameState = useSelector(state => state.gameState);
    const socket = useSelector(state => state.socket);
    const clientUser = localStorage.getItem('username');
    // const proRef = useRef();

    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    return (
        <div role={"main"}>

            <div className='timer'>
                <div>Time left: {counter}</div>
            </div>

            <div className='question-container'>
                <h1 className='question'>QUESTION GOES HERE</h1>
            </div>

            <div className='options-container'>
                <button className='options'>Option A</button>
                <button className='options'>Option B</button>
                <button className='options'>Option C</button>
                <button className='options'>Option D</button>
            </div>
        </div>
    )
}

export default Questions
