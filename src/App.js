import React from 'react';
import {Routes, Route } from 'react-router-dom'
import { Login } from './pages';

import './app.css'

const App = () => {
    return (
        <Routes>
            <Route path="/auth" element={<Login />} />
        </Routes>
    )
};

export default App;