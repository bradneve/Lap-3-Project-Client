import React from 'react'
import { InGameLeaderboard } from '../../components'
import './style.css'

const GameOver = () => {
    return (
        <div className='game-over-container'>
            <div className='w-l-container'>
                <div className='winner-loser-box'>Winner:</div>
                <div className='winner-loser-box'>Loser: </div>
            </div>
            <InGameLeaderboard currentOrFinal={'Final'}/>
        </div>
    )
}

export default GameOver