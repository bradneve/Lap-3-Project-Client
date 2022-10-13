import React, { useState, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import { InGameLeaderboard } from '../../components'
import './style.css'

const RoundSummary = () => {

    const gameState = useSelector(state => state.gameState);

    if(!Object.keys(gameState).length) {
        window.location.href = '/home'
    }

    const [counterStart, setCounterStart] = useState(0)
    const [counter, setCounter] = useState(5)
    const [endCounter, setEndCounter] = useState(3)

    const [currentQuestion, setCurrentQuestion] = useState('')
    const [currentCorrectAnswers, setCurrentCorrectAnswers] = useState('')

    const [toQuestion, setToQuestion] = useState(0);
    const [toGameOver, setToGameOver] = useState(0);
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
                setToQuestion(1)
            }
        }
    }, [counter, counterStart])

    useEffect(() => {
        if (!!gameState.isGameFinished) {
            if (endCounter > 0) {
                setTimeout(() => setEndCounter(endCounter - 1), 1000);
            } else {
                setToGameOver(1)
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
            <p style={{display: "none"}}>{toQuestion && <Navigate replace to="/question" />}</p>
            <p style={{display: "none"}}>{toGameOver && <Navigate replace to="/gameover" />}</p>
        </>
    )
}

export default RoundSummary
