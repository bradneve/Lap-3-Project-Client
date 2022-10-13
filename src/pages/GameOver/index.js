import React from 'react'
import { useSelector } from 'react-redux';
import { InGameLeaderboard } from '../../components'
import './style.css'

const GameOver = () => {
    const gameState = useSelector(state => state.gameState);

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

    return (
        <div role={"main"} className='game-over-container'>
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
            {/* <InGameLeaderboard currentOrFinal={'Final'}/> */}
        </div>
    )
}

export default GameOver
