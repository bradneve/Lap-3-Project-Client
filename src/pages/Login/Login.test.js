import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as Login } from './index'

describe('Login', () => {
    beforeEach(() => {
        render(
            renderWithReduxProvider(
                <Router>
                    <Login />
                </Router>
                , {})
        )
    })

    test('renders the page', () => {
        let roundStats = screen.getByRole("main")
        expect(roundStats).toBeTruthy
    })
})