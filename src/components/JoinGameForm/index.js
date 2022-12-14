import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style.css'
import { fetchQuestions } from '../../actions/questionActions'

const JoinGameForm = () => {

    const socket = useSelector((state) => state.socket)
    const navigate = useNavigate()

    function roomIdGenerator() {
        const chars = "0123456789".split("");
        let result = "";
        for (let i = 0; i < 6; i++) {
            const x = Math.floor(Math.random() * chars.length);
            result += chars[x];
        }
        return result;
    }

    const handleJoinFormSubmit = async (e) => {
        e.preventDefault()

        const data = {
            roomId: e.target.gamePIN.value,
            username: localStorage.getItem('username')
        }
        socket.emit('join game', data)
        navigate('/waiting')
    }

    const handleCreateFormSubmit = async (e) => {
        e.preventDefault()
        let gamePIN = roomIdGenerator()
        const questions = await fetchQuestions(e)
        const data = {
            roomId: gamePIN,
            host: localStorage.getItem('username'),
            questions: questions.questions,
            answers: questions.answers,
            correctAnswers: questions.correct_answers,
            category: e.target.category.value,
            difficulty: e.target.difficulty.value
        }
        socket.emit("create game", data);
        navigate('/waiting')
    }

    return (
        <>
            <div className='join-game-container'>
                <p>JOIN EXISTING GAME</p>
                <form role={'form'} className='join-existing-game-form' onSubmit={handleJoinFormSubmit}>
                    <label style={{ display: 'none' }} htmlFor="gamePIN">Enter your game PIN</label>
                    <input placeholder='Enter Game PIN' id='gamePIN' type="number" />
                    <input type="submit" value={'JOIN GAME'} />
                </form>
            </div>

            <div className='create-game-container'>
                <p>CREATE NEW GAME</p>

                <form role={'form'} className='create-new-game-form' onSubmit={handleCreateFormSubmit}>

                    <label htmlFor="numberOfQuestions">Select your number of questions:</label>
                    <select name="numberOfQuestions" id="numberOfQuestions">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>

                    <label htmlFor="category">Pick your category:</label>
                    <select name="category" id="category">
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals and Theatre</option>
                        <option value="14">Entertainment: TV</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science and Nature</option>
                        <option value="18">Computers</option>
                        <option value="19">Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Comics</option>
                        <option value="30">Gadgets</option>
                        <option value="31">Japanese Anime and Manga</option>
                        <option value="32">Cartoon and Animations</option>
                    </select>

                    <label htmlFor="difficulty">Choose your difficulty:</label>
                    <select name="difficulty" id="difficulty">
                        <option value="">Mixed</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>

                    <input type="submit" value="CREATE GAME" />
                </form>
            </div>
        </>
    )
}

export default JoinGameForm
