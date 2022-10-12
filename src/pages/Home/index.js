import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

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
    <div className='home-container'>
      <Logo />
      <JoinGameForm />
      <button className='logout' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
