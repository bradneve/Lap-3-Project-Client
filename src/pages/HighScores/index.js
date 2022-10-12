import React from 'react'
import { Leaderboard, Logo } from '../../components'
import './style.css'

const HighScores = () => {
    return (
        <div className='high-scores-container'>
            <Logo />
            <Leaderboard />
        </div>
    )
}

export default HighScores