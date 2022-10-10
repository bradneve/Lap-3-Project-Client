import React from 'react'
import { RoundStats, Leaderboard } from '../../components'
import './style.css'

const RoundSummary = () => {
    return (
        <>
            <div className='summary-container'>
                <div className='correct-answer'>
                    <p>Correct Answer:</p> 
                </div>
                <RoundStats />
            </div>
        </>
    )
}

export default RoundSummary