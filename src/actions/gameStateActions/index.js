const changeState = (data) => {
    return {
        type: 'CHANGE_GAME_STATE',
        payload: data
    }
}

const storeSocket = (socket) => {
    return {
        type: 'STORE_SOCKET',
        payload: socket
    }
}

const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

const updateScore = (user, score) => {
    return {
        type: 'UPDATE_SCORE',
        "user": user,
        "score": score
    }
}


export { changeState, storeSocket, addUser, updateScore };
