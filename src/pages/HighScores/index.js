import React from 'react'
import { Leaderboard, Logo, BackButton } from '../../components'
import './style.css'

const HighScores = () => {
    return (
        <div role={"main"} className='high-scores-container'>
            <BackButton />
            <Logo />
            <Leaderboard />
        </div>
    )
}

export default HighScores