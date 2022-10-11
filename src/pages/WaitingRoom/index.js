import React from 'react'
import { Logo } from '../../components'
import './style.css'

const WaitingRoom = () => {
  return (
    <div className='waiting-container'>
        <Logo/>
        <p className='game-id'>The game ID is: 2198018</p>

        <div className='members'>
            <ul className='list-of-members'>
              <h4>In the waiting room:</h4>
                <li>Jakerin (Host)</li>
                <li>Duncan</li>
                <li>Bradley</li>
                <li>Stefan</li>
            </ul>
        </div>
    </div>
  )
}

export default WaitingRoom
