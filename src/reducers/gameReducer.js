const initState = {
    gameState: {},
    socket: {},
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_GAME_STATE':
            return { ...state, gameState: action.payload };
        case 'STORE_SOCKET':
            return { ...state, socket: action.payload };
        case 'ADD_USER':
            let newUsersList = [...state.gameState.users];
            newUsersList.push({ name: action.payload, score: 0, hasCompletedQuiz: false })
            return { ...state, gameState: { ...state.gameState, users: newUsersList } };
        case 'UPDATE_SCORE':
            let newUsers = [...state.gameState.users];
            let userIdx = newUsers.findIndex(item => item.name === action.user);
            newUsers[userIdx].score += action.score;
            newUsers[userIdx].hasCompletedRound = true;
            return { ...state, gameState: { ...state.gameState, users: newUsers } };
        default:
            return state;
    }
}

export default gameReducer;
