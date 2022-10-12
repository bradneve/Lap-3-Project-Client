import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Logo } from '../../components'
import './style.css'

const WaitingRoom = () => {

  // const data = useSelector(state => state.gameState);
  // const users = useSelector(state => state.gameState);
  // console.log(users)
  // const socket = useSelector(state => state.socket);
  // const dispatch = useDispatch()

  // function handleButtonClick() {
  //   dispatch(startGame());
  //   let newState = {
  //     ...data,
  //     isGameStarted: true
  //   }
  //   socket.emit('send state to players', newState)
  // }

  return (
    <div className='waiting-container'>
      <Logo />
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
