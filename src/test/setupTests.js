import React from 'react';

import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import gameReducer from '../reducers/gameReducer'

const TestProviders = ({ initState }) => {
    initState ||= {
        gameState: {
            users: [ { hasCompletedRound: false }],
            questions: [],
            correctAnswers: [],
            answers: [],
            isGameFinished: true,
            host: 'test'
        },
        socket: {},
    };
    let testReducer = () => gameReducer(initState, { type: '@@INIT' })
    const testStore = createStore(testReducer, applyMiddleware(thunk))

    return ({ children }) => (
        <Provider store={testStore}>
            <Router>
                {children}
            </Router>
        </Provider>
    )
}

const renderWithReduxProvider = (ui, options = {}) => {
    let TestWrapper = TestProviders(options)
    render(ui, { wrapper: TestWrapper, ...options })
}

global.renderWithReduxProvider = renderWithReduxProvider
global.React = React;

global.render = render;

global.userEvent = userEvent;