import axios from 'axios'

export const login = async (username, password) => {
    try {
        let { data } = await axios.post('https://trivia-rangers.herokuapp.com/users/login', {
            name: username, 
            password: password
        })
        return data.token
    } catch (err) {
        if (err.response.status === 401) { 
            console.error(err.message)
            return err.response.status
        } else {
            console.warn(err.message)
        }
    }
}

export const register = async (username, password) => {
    try {
        await axios.post('https://trivia-rangers.herokuapp.com/users', {
            name: username, 
            password: password
        })
        return 0
    } catch (err) {
        console.error(err.message)
        return 1
    }
}

export const updateWins = async (username) => {
    try {
        await axios.patch('https://trivia-rangers.herokuapp.com/users', {
            name: username
        })
    } catch (error) {
        console.error(error.message)
    }
}
