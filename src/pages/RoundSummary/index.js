import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './style.css'

const RoundSummary = () => {
    const navigate = useNavigate();
    const gameState = useSelector(state => state.gameState);
    const isMounted = useRef(false);

    useEffect(() => {
        if(!isMounted.current){
            console.log(gameState.questionNumber)
            isMounted.current = true;
        } else{
            console.log('second')
            navigate('/question')
        }
    }, [gameState.questionNumber])

    useEffect(() => {
        console.log(gameState);
    }, [gameState])

    return (
        <>
            <div role={"main"} className='summary-container'>
                <div className='correct-answer'>
                    <p>Question:</p>
                    <p>{gameState.questions[gameState.questionNumber]}</p>
                </div>
                <div className='correct-answer'>
                    <p>Correct Answer:</p>
                    <p>{gameState.correctAnswers[gameState.questionNumber]}</p>
                </div>
                <ul>
                    {gameState.users.map(user => { return <li key={user.name}>{user.name}: {user.score}</li>})}
                </ul>
            </div>
        </>
    )
}

export default RoundSummary
