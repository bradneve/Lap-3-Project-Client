import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";

import { InGameLeaderboard } from '../../components'
import './style.css'

const GameOver = () => {
    const gameState = useSelector(state => state.gameState);

    if (!Object.keys(gameState).length) {
        window.location.href = '/home'
    }

    const [toHome, setToHome] = useState(0);

    function getScores() {
        const scores = []
        gameState.users.forEach(user => {
            scores.push(user.score)
        })
        return scores
    }
    
    function getWinner() {
        const scores = getScores()
        const index = scores.indexOf(Math.max(...scores))

        return gameState.users[index].name
    }

    function getLoser() {
        const scores = getScores()
        const index = scores.indexOf(Math.min(...scores))

        return gameState.users[index].name
    }

    function handleBackButton() {
        setToHome(1)
    }

    return (
        <div role={"main"} className='game-over-container'>
            <div className='w-l-container'>
                <div className='winner-loser-box'>
                    <h1>Winner:</h1>
                    <div className='pt-4'>
                        {getWinner()}
                    </div>
                </div>
                <div className='winner-loser-box'>
                    <h1>Loser:</h1>
                    <div className='pt-4'>
                        {getLoser()}
                    </div>
                </div>
            </div>
            <InGameLeaderboard currentOrFinal={'Final'}/>
            <button onClick={handleBackButton}>Back to home</button>
            <p style={{display: "none"}}>{toHome && <Navigate replace to="/home" />}</p>
        </div>
    )
}

export default GameOver
