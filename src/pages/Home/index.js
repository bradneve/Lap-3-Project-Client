import React, { useEffect } from 'react'
import { useNavigate, Link} from "react-router-dom";

import { JoinGameForm, Logo } from '../../components'
import './style.css'

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/")
    }
  }, [])

  const handleLogout = () => {
    localStorage.clear();
    navigate("/")
  }

  return (
    <div role={"main"} className='home-container'>
      <Logo />
      <Link className='link-to-leaderboard' to="/leaderboard">Click here to see our biggest winers!</Link>
      <JoinGameForm />
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
