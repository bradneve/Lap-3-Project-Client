import React from 'react'
import { JoinGameForm, Logo } from '../../components'
import './style.css'

const Home = () => {
  return (
    <div className='home-container'>
        <Logo/>
        <JoinGameForm/>
    </div>
  )
}

export default Home