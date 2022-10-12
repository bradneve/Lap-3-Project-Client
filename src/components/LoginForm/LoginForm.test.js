
import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as LoginForm } from './index'

describe('LoginForm', () => {
    beforeEach(() => {
        render(
            <Router>
                <LoginForm />
            </Router>
        )
    })

    test('renders the form', () => {
        let loginForm = screen.getByRole("form")
        expect(loginForm).toBeTruthy
    })
})