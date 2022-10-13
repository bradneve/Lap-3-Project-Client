import React from 'react';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'
import { Login, Home, Questions, RoundSummary, WaitingRoom, HighScores, GameOver } from './pages';
import './app.css'

import { changeState, storeSocket, addUser, incrementQuestionNumber, updateScore, setQuizAsComplete } from './actions/gameStateActions'

const io = require('socket.io-client')
const ENDPOINT = 'https://trivia-rangers.herokuapp.com/'
// const ENDPOINT = 'http://localhost:3000/'

const App = () => {

    const [socket, setSocket] = useState();
    const dispatch = useDispatch()
    const host = useSelector((state) => state.gameState.host);
    const gameState = useSelector((state) => state.gameState);


    useEffect(() => {
        const newSocket = io(ENDPOINT)

        newSocket.on("change state", (data) => {
            dispatch(changeState(data))
        })
        newSocket.on("update score", ({ user, score }) => {
            dispatch(updateScore(user, score));
        });
        dispatch(storeSocket(newSocket))
        setSocket(newSocket)
        // return () => {
        //     socket.newSocket.disconnect()
        // }
    }, [])

    useEffect(() => {
        if (socket) {
            socket.on("user joining waiting room", (user) => {
                if (localStorage.getItem('username') === host) {
                    dispatch(addUser(user));
                    let newGameState = { ...gameState };
                    newGameState.users.push({
                        name: user,
                        score: 0,
                        hasCompletedRound: false,
                    });
                    socket.emit("send state to players", newGameState);
                }
            });
        }
    }, [socket, localStorage.getItem('username'), host]);

    useEffect(() => {
        if (localStorage.getItem('username') === host) {

            let roundComplete = true
            gameState.users.forEach(user => {
                if (user.hasCompletedRound === false) {
                    roundComplete = false
                }
            })

            console.log(roundComplete)

            if (!!roundComplete && (gameState.questionNumber < (gameState.questions.length-1))) {
                console.log('why are you here???')
                let newGameState = { ...gameState }
                for (let i=0; i < newGameState.users.length; i++) {
                    newGameState.users[i].hasCompletedRound = false
                }
                newGameState.questionNumber += 1
                socket.emit("send state to players", newGameState);
            } else if (!!roundComplete && (gameState.questionNumber === (gameState.questions.length-1))) {
                let newGameState = { ...gameState }
                newGameState.isGameFinished = true
                for (let i=0; i < newGameState.users.length; i++) {
                    newGameState.users[i].hasCompletedRound = false
                }
                socket.emit("send state to players", newGameState);
            }
        }
    }, [gameState.users])

    return (
        <div role={"application"} className='main'>

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/question" element={<Questions />} />
                <Route path="/roundover" element={<RoundSummary />} />
                <Route path="/waiting" element={<WaitingRoom />} />
                <Route path="/leaderboard" element={<HighScores />} />
                <Route path="/gameover" element={<GameOver />} />
            </Routes>
        </div>
    )
};

export default App;
