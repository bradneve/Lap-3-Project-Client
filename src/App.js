import React from 'react';
import {Routes, Route } from 'react-router-dom'
import { Login, Home } from './pages';

import './app.css'

const App = () => {
    return (
        <div className='main'>

        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
        </Routes>
        </div>
    )
};

export default App;