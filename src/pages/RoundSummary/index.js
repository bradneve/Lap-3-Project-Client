import React from 'react'
import { InGameLeaderboard } from '../../components'
import './style.css'

const RoundSummary = () => {
    return (
        <>
            <div role={"main"} className='summary-container'>
                <div className='correct-answer'>
                    <p>Correct Answer:</p> 
                </div>
                <InGameLeaderboard currentOrFinal={'Current'}/>
            </div>
        </>
    )
}

export default RoundSummary