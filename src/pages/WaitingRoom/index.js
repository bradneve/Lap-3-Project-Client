import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import { Logo } from '../../components'
import './style.css'

const WaitingRoom = () => {

  const data = useSelector(state => state.gameState);
  const socket = useSelector(state => state.socket)
  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);
  }, [data])


  function ifHost() {
    if (data.host === localStorage.getItem('username')) {
      return (
        <button className='start' onClick={handleStartGame}>Start game</button>
      )
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

  useEffect(() => {
    if (!!data.isGameStarted) {
      navigate("/question")
    }
  }, [data.isGameStarted])

  return (
    <>
      {data.users &&
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
            {ifHost()}
          </div>
        </div>
      }
    </>
  )
}

export default WaitingRoom
