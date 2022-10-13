import axios from 'axios'

export const fetchQuestions = async (e) => {
    try {
        const { data } = await axios.get(`https://opentdb.com/api.php?amount=${e.target.numberOfQuestions.value}&category=${e.target.category.value}&difficulty=${e.target.difficulty.value}&type=multiple&encode=base64`)
        const result = {
            questions: [],
            answers: [],
            correct_answers: []
        }
        console.log('data', data);
        data.results.forEach(question => {
            result.answers.push(shuffle(decodeArray(question.incorrect_answers.concat([question.correct_answer]))))
            result.correct_answers.push(atob(question.correct_answer))
            result.questions.push(atob(question.question))
        })

        return result

    } catch (error) {
        console.log('Error')
    }
}

export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

const decodeArray = (array) => {
    let newArray = []
    array.forEach(e => newArray.push(atob(e)))
    return newArray
}