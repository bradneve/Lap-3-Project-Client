import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import './style.css'

const Questions = () => {

    const gameState = useSelector(state => state.gameState);

    if (!Object.keys(gameState).length) {
        window.location.href = '/home'
    }

    const [counter, setCounter] = useState(30);
    const [toRoundOver, setToRoundOver] = useState(0);
    const socket = useSelector(state => state.socket);
    const clientUser = localStorage.getItem('username');


    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            socket.emit('update player score', { roomId: gameState.roomId, user: clientUser, score: 0 })
            setToRoundOver(1)
        }
    }, [counter]);

    function handleAnswerSubmit(e) {
        if (e.target.textContent === gameState.correctAnswers[gameState.questionNumber]) {
            socket.emit('update player score', { roomId: gameState.roomId, user: clientUser, score: counter })
            setToRoundOver(1)
        } else {
            socket.emit('update player score', { roomId: gameState.roomId, user: clientUser, score: 0 })
            setToRoundOver(1)
        }
    }

    return (

        <div role={'main'}>

            <div className='timer'>
                <div>Time left: {counter}</div>
            </div>

            <div className='question-container'>
                <h1 className='question'>{gameState.questions[gameState.questionNumber]}</h1>
            </div>

            <div className='options-container'>
                <button className='options' onClick={handleAnswerSubmit}>{gameState.answers[gameState.questionNumber][0]}</button>
                <button className='options' onClick={handleAnswerSubmit}>{gameState.answers[gameState.questionNumber][1]}</button>
                <button className='options' onClick={handleAnswerSubmit}>{gameState.answers[gameState.questionNumber][2]}</button>
                <button className='options' onClick={handleAnswerSubmit}>{gameState.answers[gameState.questionNumber][3]}</button>
            </div>
            <p style={{ display: "none" }}>{toRoundOver && <Navigate replace to="/roundover" />}</p>
        </div>
    )
}

export default Questions
