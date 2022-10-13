// import { screen, within } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
// const { createServer } = require("http");
// const Client = require("socket.io-client");

// describe('App', () => {

//     test('it renders the landing page with a Login Form', () => {
//         renderWithReduxProvider(<App />)
//         const Login = screen.getByRole('form')
//         expect(Login).toBeTruthy()
//     })
// });

import { screen } from '@testing-library/react';
import { default as App } from '../App'

describe('App', () => {
    beforeEach(() => {
        renderWithReduxProvider(
            <App />
            , {})
    })

    test('renders the page', () => {
        let roundStats = screen.getByRole("application")
        expect(roundStats).toBeTruthy
    })

    // test('round isnt complete if any users have not finished', () => {
    //     let roundComplete = false
    //     window.localStorage.setItem(1, { username: "test" })
    //     renderWithReduxProvider(<App />, {})
    //     expect(roundComplete).toBeFalsy()
    // })
})