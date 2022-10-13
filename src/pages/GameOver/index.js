import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { updateWins } from '../../actions/userActions';
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

    const [alreadyUpdated, setAlreadyUpdated] = useState(0)

    function getWinner() {
        const scores = getScores()
        const winners = []
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] === Math.max(...scores)) {
                winners.push(gameState.users[i].name);
            }
        }

        if (winners.length > 1) {
            let returnWinners = ''
            winners.forEach(e => returnWinners = returnWinners + e + '  ')
            return returnWinners
        } else {
            if (gameState.host === localStorage.getItem('username') && !alreadyUpdated) {
                updateWins(winners[0])
                setAlreadyUpdated(1)
            }
            return winners[0]
        }
    }


    function getLoser() {
        const scores = getScores()
        const names = []
        for (let i = 0; i < scores.length; i++) {
            if (scores[i] === Math.min(...scores)) {
                names.push(gameState.users[i].name);
            }
        }
        if (names.length > 1) {
            let returnNames = ''
            names.forEach(e => returnNames = returnNames + e + '  ')
            return returnNames
        } else {
            return names[0]
        }
    }

    function handleBackButton() {
        setToHome(1)
    }

    return (
        <div role={"main"} className='game-over-container'>
            <h1 className='game-over-title'>GAME OVER</h1>
            <div className='winner-loser-box'>
                <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#5e057e', fontSize: 'min(3.5vw, 40px)' }}>Winner(s)</h1>
                <h1>{getWinner()}</h1>
            </div>
            <div className='winner-loser-box'>
                <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#5e057e', fontSize: 'min(3.5vw, 40px)' }}>Loser(s)</h1>
                <h1>{getLoser()}</h1>
            </div>
            <InGameLeaderboard currentOrFinal={'Final'}/>
            <button style={{margin: '1vw'}} className='back-btn' onClick={handleBackButton}>Back to home</button>
            <p style={{display: "none"}}>{toHome && <Navigate replace to="/home" />}</p>
        </div>
    )
}

export default GameOver
