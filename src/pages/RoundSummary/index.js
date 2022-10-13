import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { InGameLeaderboard } from '../../components'
import './style.css'

const RoundSummary = () => {

    const [counterStart, setCounterStart] = useState(0)
    const [counter, setCounter] = useState(5)
    const [endCounter, setEndCounter] = useState(3)

    const [currentQuestion, setCurrentQuestion] = useState('')
    const [currentCorrectAnswers, setCurrentCorrectAnswers] = useState('')

    const navigate = useNavigate();
    const gameState = useSelector(state => state.gameState);
    const isMounted = useRef(false);

    useEffect(() => {
        if (!isMounted.current) {
            isMounted.current = true;
            setCurrentQuestion(gameState.questions[gameState.questionNumber])
            setCurrentCorrectAnswers(gameState.correctAnswers[gameState.questionNumber])
        } else {
            setCounterStart(1)
        }
    }, [gameState.questionNumber])

    useEffect(() => {
        if (!!counterStart) {
            if (counter > 0) {
                setTimeout(() => setCounter(counter - 1), 1000);
            } else {
                navigate('/question')
            }
        }
    }, [counter, counterStart])

    useEffect(() => {
        if (!!gameState.isGameFinished) {
            if (endCounter > 0) {
                setTimeout(() => setEndCounter(endCounter - 1), 1000);
            } else {
                navigate('/gameover')
            }
        }
    }, [gameState.isGameFinished, endCounter])

    return (
        <>
            <div className='timer'>
                {gameState.isGameFinished
                    ? <div>Game over in: {endCounter}</div>
                    : [
                        counterStart
                            ? <div>Next question in: {counter}</div>
                            : <div>Waiting for players to answer</div>
                    ]
                }
            </div>

            <div role={"main"} className='summary-container'>
                <div className='correct-answer'>
                    <p>Question:</p>
                    <p>{currentQuestion}</p>
                </div>
                <div className='correct-answer'>
                    <p>Correct Answer:</p>
                    <p>{currentCorrectAnswers}</p>
                </div>
                <InGameLeaderboard currentOrFinal={'Current'} />
            </div>
        </>
    )
}

export default RoundSummary
