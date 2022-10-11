import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { Login, Home, Questions, RoundSummary, WaitingRoom } from './pages';
import './app.css'

import { changeState, storeSocket, addUser, startGame, incrementQuestionNumber, updateScore, setQuizAsComplete } from './actions/gameStateActions'

const io = require('socket.io-client')
// const ENDPOINT = 'https://trivia-rangers.herokuapp.com/'
const ENDPOINT = 'http://localhost:3000/'

const App = () => {

    const [socket, setSocket] = useState();
    const dispatch = useDispatch()
    const host = useSelector((state) => state.gameState.host);
    const gameState = useSelector((state) => state.gameState);


    useEffect(() => {
        const newSocket = io(ENDPOINT)

        newSocket.on("create game", (data) => {
            dispatch(changeState(data))
        })

        console.log(newSocket)
        setSocket({ newSocket })
        return () => {
            socket.newSocket.disconnect()
        }
    }, [])

    // useEffect(() => {
    //     if (socket) {
    //       socket.on("user joining waiting room", (user) => {
    //         if (localStorage.getItem('username') === host) {
    //           dispatch(addUser(user));
    //           let newGameState = { ...gameState };
    //           newGameState.users.push({
    //             name: user,
    //             score: 0,
    //             hasCompletedQuiz: false,
    //           });
    //           socket.emit("send state to players", newGameState);
    //         }
    //       });
    //     }
    //   }, [socket, localStorage.getItem('username'), host]);

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
