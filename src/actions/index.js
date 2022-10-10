import axios from 'axios'
import { useDispatch } from 'react-redux';


const storeQuestions = ({})

export const getQuestions = async (e) => {
    e.preventDefault()
    try {
            console.log('hell')
            const data = await fetchQuestions(e)
            const questions = []
            data.forEach( question => questions.push(question.question))
            console.log(questions);
            dispatch(storeQuestions(questions))
        }
        catch (err) {
            console.warn(err.message)
        }
    }

const fetchQuestions = async (e) => {
    try {
        e.preventDefault()
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=${e.target.numberOfQuestions.value}&category=${e.target.category.value}&difficulty=${e.target.difficulty.value}&type=multiple`)
        return data.results
    } catch (error) {
        console.log('Error')
    }
}