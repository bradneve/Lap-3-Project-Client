import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

import { Logo } from '../../components'
import './style.css'

const WaitingRoom = () => {

  const data = useSelector(state => state.gameState);
  const socket = useSelector(state => state.socket)

  function ifHost() {
    if (data.host === localStorage.getItem('username')) {
      return (<button className='start' onClick={handleStartGame}>Start game</button>)
    } else {
      return (
        <p className='wait-for-host'>Waiting for host to start the game...</p>
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

  const [toHome, setToHome] = useState(0);
  function handleBackButton() {
    setToHome(1)
  }

  return (
    <>
      {!Object.keys(data).length
        ? 
        <div className='d-flex justify-content-center d-flex align-items-center'>
          <button onClick={handleBackButton}>Back to home</button>
          <p style={{display: "none"}}>{toHome && <Navigate replace to="/home" />}</p>
        </div>
        :
        <div role="main" className='waiting-container'>
          <Logo />
          <p className='game-id'>{data.host}'s room</p>
          <p className='game-id'>Game ID: {data.roomId}</p>
          {/* <p>Category: { data.category }</p>
          <p>Difficulty: { data.difficulty }</p> */}
          <div className='members'>
            <ul className='list-of-members'>
              <h4>In the waiting room:</h4>
              {data.users.map(user => { return <li key={user.name}>{user.name}</li> })}
            </ul>
            {data.users.length > 1
              ? ifHost()
              : <p className='game-id'>Two players required to start game...</p>
            }
          </div>
        </div>
      }
      <p style={{display: "none"}}>{data.isGameStarted && <Navigate replace to="/question" />}</p>
    </>
  )
}

export default WaitingRoom
