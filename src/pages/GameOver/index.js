import React from 'react'
import { InGameLeaderboard } from '../../components'
import './style.css'

const GameOver = () => {
    return (
        <div className='game-over-container'>
                <h1 className='game-over-title' >GAME OVER</h1>
                <div className='winner-loser-box'>Winner:</div>
                <div className='winner-loser-box'>Loser: </div>
            <InGameLeaderboard currentOrFinal={'Final'}/>
        </div>
    )
}

export default GameOver