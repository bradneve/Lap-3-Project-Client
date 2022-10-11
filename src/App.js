import React from 'react';
import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { Login, Home, Questions, RoundSummary, WaitingRoom } from './pages';
import './app.css'

const io = require('socket.io-client')
// const ENDPOINT = 'https://trivia-rangers.herokuapp.com/'
const ENDPOINT = 'http://localhost:3000/'

const App = () => {

    const [state, setState] = useState({ socket: null });

    useEffect(() => {
        const socket = io(ENDPOINT)
        setState({ socket })
        return () => {
            state.socket.disconnect()
        }

    }, [])

    return (
        <div className='main'>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/question" element={<Questions />} />
                <Route path="/roundover" element={<RoundSummary />} />
                <Route path="/waiting" element={<WaitingRoom />} />
            </Routes>
        </div>
    )
};

export default App;
