import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import './style.css'

const InGameLeaderboard = ({ currentOrFinal }) => {
  const gameState = useSelector(state => state.gameState);
  const [orderedPlayers, setOrderedPlayers] = useState([])
  const clientUser = localStorage.getItem('username');

  useEffect(() => {
    var byScore = gameState.users.slice(0);
    byScore.sort((a, b) => {
      return b.score - a.score;
    });
    setOrderedPlayers(byScore)
  }, [gameState.users])



  return (
    <div role={"contentinfo"} className='igl-container'>
      <h1 className='leaderboard-title' style={{ fontWeight: 'bold', textDecoration: 'underline', color: '#5e057e', fontSize: 'min(3.5vw, 40px)' }}>{currentOrFinal} Scores</h1>
      <ul className='leaderboard-list' role={"list"}>
        {orderedPlayers.map(user => {
          if(user.name === clientUser) {
            return <li style={{textDecoration: "underline"}}  key={user.name}>{user.name}: {user.score}</li>
          } else {
            return <li key={user.name}>{user.name}: {user.score}</li> 
          }
          })}
      </ul>
    </div>
  )
}

export default InGameLeaderboard
