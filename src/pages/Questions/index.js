import React from 'react'

import './style.css'
import { Timer } from '../../components'

const Questions = () => {
    return (
        <div>

            <div className='timer'><Timer/></div>
  
            <div className='question-container'>
                <h1 className='question'>QUESTION GOES HERE</h1>
            </div>

            <div className='options-container'>
                <button className='options'>Option A</button>
                <button className='options'>Option B</button>
                <button className='options'>Option C</button>
                <button className='options'>Option D</button>
            </div>
        </div>
    )
}

export default Questions
