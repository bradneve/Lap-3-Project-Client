import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as Leaderboard } from './index'

describe('Leaderboard', () => {
    beforeEach(() => {
        render(
            <Router>
                <Leaderboard />
            </Router>
        )
    })

    test('renders the form', () => {
        let leaderboard = screen.getByRole("list")
        expect(leaderboard).toBeTruthy
    })
})