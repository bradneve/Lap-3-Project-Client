import React, { useEffect, useState } from 'react'
import './style.css'
import { getWinners } from '../../actions/userActions'

const Leaderboard = () => {
  const [orderedPlayers, setOrderedPlayers] = useState([])
  const clientUser = localStorage.getItem('username');

  useEffect(() => {
    async function fetchLeaderboard() {
      const leaderboardData = await getWinners()
      var byWins = leaderboardData
      console.log(byWins)
      byWins.sort((a, b) => {
        return b.wins - a.wins;
      });
      setOrderedPlayers(byWins)
    }
    fetchLeaderboard()
  }, [])


  return (
    <div className='leaderboard-container-container'>
      <h1 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: 'min(3vw,35px)' }}>Most Wins</h1>
      <div className='leaderboard-container'>
        <ul className='leaderboard-list' role={"list"}>
          {orderedPlayers.map(user => {
            if (user.name === clientUser) {
              return <li style={{ textDecoration: "underline" }} key={user.name}>{user.name}: {user.wins}</li>
            } else {
              return <li key={user.name}>{user.name}: {user.wins}</li>
            }
          })}
        </ul>
      </div>
    </div>
  )
}

export default Leaderboard
