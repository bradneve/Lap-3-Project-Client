import React from 'react';
import {Routes, Route } from 'react-router-dom'
import { Login, Home, Questions, RoundSummary, WaitingRoom } from './pages';

import './app.css'

const App = () => {
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
