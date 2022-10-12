import React from 'react'
import { useSelector } from 'react-redux'
import { Logo } from '../../components'
import './style.css'

const WaitingRoom = () => {

  const data = useSelector(state => state.gameState);
  const socket = useSelector(state => state.socket)


  function ifHost() {
    if (data.host === localStorage.getItem('username')) {
      return (
        <button onClick={handleStartGame}>Start game</button>
      )
    }
  }

  function handleStartGame() {
    let newState = {
      ...data,
      isGameStarted: true
    }
    socket.emit('send state to players', newState)
  }

  return (
    <>
      {data.users &&
        <div role={"main"} className='waiting-container'>
          <Logo />
          <p className='game-id'>The game ID is: {data.roomId}</p>
          <div className='members'>
            <ul className='list-of-members'>
              <h4>In the waiting room:</h4>
              {data.users.map(user => { return <li key={user.name}>{user.name}</li> })}
            </ul>
            {ifHost()}
          </div>
        </div>
      }
    </>
  )
}

export default WaitingRoom
