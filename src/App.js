import React from 'react';
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import {Routes, Route } from 'react-router-dom'
import { Login, Home, Questions, RoundSummary, WaitingRoom } from './pages';
import './app.css'

// import {
//     changeState,
//     storeSocket,
//     addUser,
//     updateScore,
//     setQuizAsComplete,
//   } from "./actions/gameStateActions";

// const io = require('socket.io-client')
// const ENDPOINT = 'https://trivia-rangers.herokuapp.com/'

const App = () => {

    // const [socket, setSocket] = useState();
    // const dispatch = useDispatch();
    // const clientUser = useSelector((state) => state.user);
    // const host = useSelector((state) => state.gameState.host);
    // const gameState = useSelector((state) => state.gameState);
  
    // // initialise a socket and events to listen for
    // useEffect(() => {
    //   const newSocket = io(ENDPOINT);
    //   newSocket.on("change state", (state) => {
    //     dispatch(changeState(state));
    //   });
    //   newSocket.on("update opponents score", ({ user, score }) => {
    //     dispatch(updateScore(user, score));
    //   });
    //   newSocket.on("update opponent completion", (user) => {
    //     dispatch(setQuizAsComplete(user));
    //   });
    //   dispatch(storeSocket(newSocket));
    //   setSocket(newSocket);
    // }, []);
  
    // useEffect(() => {
    //   if (socket) {
    //     socket.on("user joining waiting room", (user) => {
    //       if (clientUser === host) {
    //         dispatch(addUser(user));
    //         let newGameState = { ...gameState };
    //         newGameState.users.push({
    //           name: user,
    //           score: 0,
    //           hasCompletedQuiz: false,
    //         });
    //         socket.emit("send state to players", newGameState);
    //       }
    //     });
    //   }
    // }, [socket, clientUser, host]);

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
