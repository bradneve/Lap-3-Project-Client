import axios from 'axios'
const fetchQuestions = async (e) => {
    try {
        e.preventDefault()
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=${e.target.numberOfQuestions.value}&category=${e.target.category.value}&difficulty=${e.target.difficulty.value}&type=multiple`)
        console.log(data)
    } catch (error) {
        console.log('Error')
    }
}