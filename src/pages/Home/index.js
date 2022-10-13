import React, { useEffect } from 'react'
import { useNavigate, Link} from "react-router-dom";
import { useSelector } from 'react-redux';

import { JoinGameForm, Logo } from '../../components'
import './style.css'

const Home = () => {
  const navigate = useNavigate();
  const gameState = useSelector((state) => state.gameState);

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/")
    }
    if (!!Object.keys(gameState).length) {
      window.location.reload();
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
