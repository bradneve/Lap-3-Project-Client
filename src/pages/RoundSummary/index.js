import React from 'react'
import { RoundStats } from '../../components'
import './style.css'

const RoundSummary = () => {
    return (
        <>
            <div role={"main"} className='summary-container'>
                <div className='correct-answer'>
                    <p>Correct Answer:</p> 
                </div>
                <RoundStats />
            </div>
        </>
    )
}

export default RoundSummary