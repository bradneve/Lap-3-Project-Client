import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import './style.css'

const Questions = () => {

    const [counter, setCounter] = useState(30);
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState('')
    const [currentAnswers, setCurrentAnswers] = useState([])

    const gameState = useSelector(state => state.gameState);
    const socket = useSelector(state => state.socket);
    const clientUser = localStorage.getItem('username');


    useEffect(() => {
        if (counter > 0) {
            setTimeout(() => setCounter(counter - 1), 1000);
        } else {
            // let score = 0
            socket.emit('update player score', { roomId: gameState.roomId, user: clientUser, score: 0 })
            navigate('/roundover')
        }
    }, [counter]);

    useEffect(() => {
        if (!gameState.isGameFinished) {
            setCurrentQuestion(gameState.questions[gameState.questionNumber])
            setCurrentAnswers(gameState.answers[gameState.questionNumber])
        } else {
            //redirect to finish page
        }
    }, [gameState.questionNumber, gameState.isGameFinished])


    function handleAnswerSubmit(e) {
        if (e.target.textContent === gameState.correctAnswers[gameState.questionNumber]) {
            // let score = counter
            socket.emit('update player score', { roomId: gameState.roomId, user: clientUser, score: counter })
            navigate('/roundover')
        } else {
            // let score = 0
            socket.emit('update player score', { roomId: gameState.roomId, user: clientUser, score: 0 })
            navigate('/roundover')
        }
    }


    return (
        <div>

            <div className='timer'>
                <div>Time left: {counter}</div>
            </div>

            <div className='question-container'>
                <h1 className='question'>{currentQuestion}</h1>
            </div>

            <div className='options-container'>
                <button className='options' onClick={handleAnswerSubmit}>{currentAnswers[0]}</button>
                <button className='options' onClick={handleAnswerSubmit}>{currentAnswers[1]}</button>
                <button className='options' onClick={handleAnswerSubmit}>{currentAnswers[2]}</button>
                <button className='options' onClick={handleAnswerSubmit}>{currentAnswers[3]}</button>
            </div>
        </div>
    )
}

export default Questions
