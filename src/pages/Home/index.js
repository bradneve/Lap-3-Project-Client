import React, { useEffect } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { JoinGameForm, Logo } from '../../components'
import './style.css'

const Home = () => {
  const navigate = useNavigate();
  const gameState = useSelector((state) => state.gameState);

  useEffect(() => {
    if (!!Object.keys(gameState).length) {
      window.location.reload();
    }

    //check for valid token
    if (!localStorage.getItem('token')) {
      navigate("/")
    } else {
      const options = { headers: new Headers({ 'Authorization': localStorage.getItem('token') }) }
      fetch('https://trivia-rangers.herokuapp.com', options)
        .then(res => {
          if (!res.ok) {
            handleLogout()
          }
        })
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div role={"main"} className='home-container'>
      <Logo />
      <Link className='link-to-leaderboard' to="/leaderboard">Click here to see our biggest winners!</Link>
      <JoinGameForm />
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
