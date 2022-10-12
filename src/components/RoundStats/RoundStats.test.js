import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { default as RoundStats } from './index'

describe('RoundStats', () => {
    beforeEach(() => {
        render(
            <Router>
                <RoundStats />
            </Router>
        )
    })

    test('renders the round stats', () => {
        let roundStats = screen.getByRole("contentinfo")
        expect(roundStats).toBeTruthy
    })
})